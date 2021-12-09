import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Reservation } from 'src/app/Reservation';
import { Service } from 'src/app/Service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})

/***
 * 
 *  Component that passes the new reservation's info
 *  Component visibility is toggled via button in header
 *  Services array is used to populate the drop-down menu
 * 
 */
export class AddReservationComponent implements OnInit {
  @Output() onAddReservation: EventEmitter<Reservation>= new EventEmitter()
  services: Service[] = []
  id!: string
  userId: string = this.localStorageService.get("userId")
  serviceId!: string
  datetime!: string
  duration!: string
  showAddReservation!: boolean
  subscription: Subscription
  

  constructor(private uiService: UiService, private servicesService: ServicesService, private localStorageService: LocalstorageService) {
    this.subscription = this.uiService.onToggle()
    .subscribe(value => (this.showAddReservation = value))
  }

  ngOnInit(): void {
    this.servicesService.getServices().subscribe((services) => this.services = services)
  }

  onSubmit() {
    const newReservation = {
      id: this.id,
      userId: this.userId,
      serviceId: this.serviceId,
      reservationDateTime: this.datetime,
      reservationDuration: this.duration
    }

    this.onAddReservation.emit(newReservation)

    this.datetime = ""
    this.duration = ""
  }

}