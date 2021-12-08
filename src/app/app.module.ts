import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInItemComponent } from './components/log-in-item/log-in-item.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: 'home', component: ReservationsComponent},
  {path: 'login', component: LogInComponent},
  {path: '',redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ReservationsComponent,
    ReservationItemComponent,
    AddReservationComponent,
    LogInComponent,
    LogInItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
