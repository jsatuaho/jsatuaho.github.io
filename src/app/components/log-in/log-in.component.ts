import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { LocalstorageService } from 'src/app/services/localstorage.service';

/**
 * 
 *  Login component, receives username and password from child login Component. Sends username and password 
 *    to endpoint, receives array with user info, if match saves userid and name to local storage and 
 *    redirects user to /home
 *  Data transmission is insercure
 * 
 */

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  

    constructor(private router: Router, private authService: AuthService, private localStorage: LocalstorageService) {}

    login(loginUser: any) {
      const userEmail: string = loginUser.userEmail
      const userPassword: string = loginUser.userPassword
      this.authService.getUser(userEmail).subscribe((user: User[]) => {
        const u = user[0]
        if (!u) {
          alert("Invalid username/password")
          return
        }
        if (u.email === userEmail && u.password === userPassword) {
          this.localStorage.set("userId", u.id)
          this.localStorage.set("userName", u.name)
          this.router.navigateByUrl("/home")
        } else {
          alert("Invalid username/password")
        }
      })
    }
}
