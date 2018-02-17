import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {} from 'rxjs/add/Observable/of';
import {Subscription} from "rxjs/Subscription";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestOptions} from "@angular/http";

@Injectable()
export class AuthenticationService {

  observer;


  constructor(private httpClient: HttpClient) {
  }

  login(user) {
    const headers = new HttpHeaders(user ? {
      authorization : 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});

    return this.httpClient.get(`http://localhost:8081/user`,  {headers: headers});
  }

  register(user) {
    return this.httpClient.post(`http://localhost:8081/register`, user);
  }

  logout() {
    console.log('logout');
    localStorage.setItem('logged', 'false');
    this.observer.next(false);
  }


  createObservable(): Observable<any> {
    return new Observable<any>(observer => {
      this.observer = observer;
    });

  }


}
