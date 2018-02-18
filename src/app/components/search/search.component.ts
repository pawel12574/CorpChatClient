// import {Component, OnInit} from '@angular/core';
// import {AuthenticationService} from "../services/authentication.service";
// import {analyzeAndValidateNgModules} from "@angular/compiler";
//
// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {
//
//   search;
//   finded: any = {};
//   loading = false;
//   message;
//
//   constructor(private authenticationService: AuthenticationService) {
//   }
//
//   ngOnInit() {
//   }
//
//   searchUser() {
//     this.loading = true;
//     this.authenticationService.searchUser(this.search).subscribe(data => {
//       this.finded = data;
//       this.loading = false;
//     });
//   }
//
//   addFriend() {
//     this.authenticationService.addFriend(this.finded.email).subscribe(data => {
//       this.message = `Friend add to list`;
//     });
//
//   }
//
// }
