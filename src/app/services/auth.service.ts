import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:5000/users'

  constructor(private http: HttpClient) { }

  getUser(loginUser: {userEmail: string, userPassword: string}): Observable<User[]> {
    const url = `${this.apiUrl}?email=${loginUser.userEmail}`
    console.log(url)
    return this.http.get<User[]>(url)
  }
}
