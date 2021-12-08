import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']

})
export class FooterComponent implements OnInit {

  constructor(private localStorageService: LocalstorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.localStorageService.clear()
    this.router.navigateByUrl("/login")
  }

}
