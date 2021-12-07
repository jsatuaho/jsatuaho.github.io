import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/Reservation';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[] = []

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
   this.reservationService.getReservations().subscribe((reservations) => this.reservations = reservations)
  }

  deleteReservation(reservation: Reservation) {
    this.reservationService
      .deleteReservation(reservation)
        .subscribe(
          () => this.reservations = this.reservations.filter(r => r.id !== reservation.id))
  }

  addReservation(reservation: Reservation) {
    this.reservationService.addReservation(reservation).subscribe((reservation) => (this.reservations.push(reservation)))
  }
}
