import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * 
 *  Service to handle showing the add reservation UI
 *    Is invisible when showAddReservation is false, visible when true
 *    
 */

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
