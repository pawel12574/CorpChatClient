import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {} from 'rxjs/add/Observable/of';
import {Subscription} from "rxjs/Subscription";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {Api} from "../../api";

@Injectable()
export class AuthenticationService {

  observer;
  isAuth;

  constructor(private httpClient: HttpClient, private router: Router, private api: Api) {
  }

  login(user) {
    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});
    return this.httpClient.get(`${this.api}/user`, {headers: headers});

  }

  logout() {
    console.log('logout');
    return this.httpClient.get(`${this.api}/logout`, {});
  }

  register(user) {
    return this.httpClient.post(`${this.api}/register`, user);
  }

  getLoggedUsername() {
    return localStorage.getItem('username');
  }

  getLoggedUser() {
    return this.httpClient.get(`${this.api}/getloggedUser`);
  }

  getFriendList() {
    return this.httpClient.get(`${this.api}/getFriends/`);
  }

  searchUser(email) {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`${this.api}/searchFriend/` + email);
  }

  addFriend(email) {
    const username = localStorage.getItem('username');
    return this.httpClient.get(`${this.api}/addFriend/` + email);
  }

  createObservable(): Observable<any> {
    return new Observable<any>(observer => {
      this.observer = observer;
    });

  }


}
