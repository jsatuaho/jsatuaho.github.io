import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from '../../Reservation';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation!: Reservation
  @Output() onDeleteReservation: EventEmitter<Reservation> = new EventEmitter
  services: Service[] = []
  serviceName!: string

  faTimes = faTimes

  constructor(private servicesService: ServicesService, private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.servicesService.getServices().subscribe((services) => {
      this.services = services
      for (let service of this.services) {
        if (service.id == this.reservation.serviceId) {
          this.serviceName = service.name
        }
      }
    })
  }

  onDelete(reservation: Reservation) {
    this.onDeleteReservation.emit(reservation)
  }

  addReservation(reservation: Reservation) {
    this.reservationService.addReservation(reservation).subscribe((reservation) => {
      for (let service of this.services) {
        if (service.id == reservation.serviceId) {
          this.serviceName = service.name
        }
        console.log("service from reservation-item.component pinged!")
      }
    })
  }
}
