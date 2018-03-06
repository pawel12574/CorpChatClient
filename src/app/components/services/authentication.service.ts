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


  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(user) {
    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});
    localStorage.setItem('username', user.username);
    return this.httpClient.get(`http://localhost:8081/user`, {headers: headers});

  }

  getLoggedUsername() {
    return localStorage.getItem('username');
  }

  getUser() {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:8081/getloggedUser`);
  }

  register(user) {

    return this.httpClient.post(`http://localhost:8081/register`, user);
  }

  getFriendList() {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:8081/getFriend/` + username);
  }

  logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  searchUser(email) {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:8081/find/` + username + `/` + email);
  }

  addFriend(email) {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:8081/addFriend/` + username + `/` + email);
  }

  createObservable(): Observable<any> {
    return new Observable<any>(observer => {
      this.observer = observer;
    });

  }


}
