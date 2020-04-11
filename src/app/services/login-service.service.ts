import { Injectable } from '@angular/core';
import { UserLogin } from '../model/user-login';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  sendLoginRequest(userLogin: UserLogin): Observable<any> {
    if(userLogin.userName!='error') {
      return of("login successful!");
    }
    else {
      return of("error!");
    }
  }
}
