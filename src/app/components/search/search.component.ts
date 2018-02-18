import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search;
  finded: any = {};
  loading = false;
  success = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    console.log(this.finded);
  }

  searchUser() {
    this.loading = true;
    this.authenticationService.searchUser(this.search).subscribe(data => {
      this.finded = data;
      this.loading = false;
      this.success = true;
    }
      ,
      error => {
        this.finded = {};
        this.success = false;
        this.loading = false;
      });
  }

  addFriend() {
    this.authenticationService.addFriend(this.finded.email).subscribe(data => {
      // this.message = `Friend add to list`;
    });
  }

}
