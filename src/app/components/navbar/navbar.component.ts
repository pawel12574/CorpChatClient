import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  clicked() {
    this.authenticationService.getUser().subscribe(data => {
      this.isLogged = data;
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}
