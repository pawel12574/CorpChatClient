import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  message = false;

  ngOnInit(): void {
  }

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('username', this.model.username);
          this.router.navigate(['/']);
        },
        error => {
          localStorage.clear();
          this.message = true;
          this.loading = false;
        });

  }

}
