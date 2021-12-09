import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Reservation } from '../Reservation';
import { LocalstorageService } from './localstorage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

/**
 * 
 *  Services to fetch, delete, and put reservations from the DB
 */

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private apiUrl = 'http://localhost:5000/reservations'

  constructor(private http: HttpClient, private localStorageService: LocalstorageService) { }

  getReservations(): Observable<Reservation[]> {
    const userId = this.localStorageService.get("userId")
    const url = `${this.apiUrl}?userId=${userId}`
    return this.http.get<Reservation[]>(url)
  }

  deleteReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.apiUrl}/${reservation.id}`
    return this.http.delete<Reservation>(url)
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return   this.http.post<Reservation>(this.apiUrl, reservation, httpOptions)
  }
}
