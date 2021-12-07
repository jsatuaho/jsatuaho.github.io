import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Reservation Manager"
  showAddReservation!: boolean
  subscription!: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe(value => (this.showAddReservation = value))
  }

  ngOnInit(): void {
  }

  toggleAddReservation() {
    this.uiService.toggleAddReservation()
  }

}
