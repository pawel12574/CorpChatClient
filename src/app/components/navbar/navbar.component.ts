import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  clicked() {
    this.authenticationService.getLoggedUser().subscribe(data => {
      this.isLogged = data;
    });
  }

  logout() {
    localStorage.clear();
    this.authenticationService.logout().subscribe(() => {});
    this.router.navigate(['/login']);
  }
}
