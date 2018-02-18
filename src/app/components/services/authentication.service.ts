import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {} from 'rxjs/add/Observable/of';
import {Subscription} from "rxjs/Subscription";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  observer;
  peer = null;


  constructor(private httpClient: HttpClient,  private router: Router) {
  }

  login(user) {
    // const headers = new HttpHeaders(user ? {
    //   authorization : 'Basic ' + btoa(user.username + ':' + user.password)
    // } : {});
    //
    // const body = 'username=' + user.username + '&password=' + user.password;
    //   this.httpClient.post(`http://localhost:8081/login`, user).subscribe(data => {
//   console.log(data)
//   if (data === true) {
//   localStorage.setItem('username', user.username);
// }
// });
    localStorage.setItem('username', user.email);
    return this.httpClient.post(`http://localhost:8081/log`, user);

  }

  getLoggedUsername() {
    return localStorage.getItem('username');
  }

  getUser() {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:8081/find/` + username);
  }

  register(user) {

    return this.httpClient.post(`http://localhost:8081/register`, user);
  }

  getFriendList() {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:8081/getFriend/` + username);
  }

  // getPeer() {
  //
  //   let user;
  //   this.getUser().subscribe(data => {
  //     user = data;
  //
  //       this.peer = new Peer(user.id, {key: '6qn8ssv10dkdfgvi'});
  //
  //       return this.peer;
  //
  //   });
  // }

  logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  searchUser(email) {
    return this.httpClient.get(`http://localhost:8081/find/` + email);
  }

  addFriend(email) {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:8081/addFriend` + username + `/` + email);
  }

  createObservable(): Observable<any> {
    return new Observable<any>(observer => {
      this.observer = observer;
    });

  }


}
