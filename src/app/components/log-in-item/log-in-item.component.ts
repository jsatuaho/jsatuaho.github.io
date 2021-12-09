import { Component, Output, EventEmitter } from '@angular/core';

/**
 * 
 * Login form that sends the info down to parent component for processing
 * 
 */

@Component({
  selector: 'app-log-in-item',
  templateUrl: './log-in-item.component.html',
  styleUrls: ['./log-in-item.component.css']
})
export class LogInItemComponent {
  @Output() onSubmitLogin: EventEmitter<any>= new EventEmitter()
  email!: string
  password!: string

  constructor() { }

  onSubmit() {
    const loginUser = {
      userEmail: this.email,
      userPassword: this.password
    }

    this.onSubmitLogin.emit(loginUser)
  }

}
