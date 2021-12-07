import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddReservation: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  toggleAddReservation(): void {
    this.showAddReservation = !this.showAddReservation
    this.subject.next(this.showAddReservation)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
