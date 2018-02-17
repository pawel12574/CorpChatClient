import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {};
  loading = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  register() {
    this.loading = true;
    this.authenticationService.register(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {

          this.loading = false;
        });
  }

}
