import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  @Output() friendEvent = new EventEmitter();
  friendList: any = [];

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.getFriendList().subscribe(data => {
        this.friendList = data;
        this.friendEvent.emit(this.friendList);
      },
      error => {
        this.router.navigate(['/login']);
      }
    );

  }

}
