import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

/**
 * 
 *  Header component that contains app title and a button to toggle the add reservation interface
 *  Button is visible only in the /home url
 * 
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Reservation Manager"
  showAddReservation!: boolean
  subscription!: Subscription

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle()
    .subscribe(value => (this.showAddReservation = value))
  }

  ngOnInit(): void {
  }

  toggleAddReservation() {
    this.uiService.toggleAddReservation()
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
