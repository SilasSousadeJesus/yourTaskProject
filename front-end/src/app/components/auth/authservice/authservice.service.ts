
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

url = "http://localhost:3000";

  constructor(private http: HttpClient,
              private router: Router) { }

  signUp(user: User){
    return this.http.post<User>(this.url + '/user/signup', user)
  }

  sigIni(user:User){
    return this.http.post<User>(this.url + '/user/signin', user)
  }

  loggedIn():Boolean {
    return !!sessionStorage.getItem('token')
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/home'])
  }

  getToken(){
    return sessionStorage.getItem('token')
  }

  intercept(req:any, next:any){
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }

}
