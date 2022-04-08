import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  signUp(user: User){
    return this.http.post<User>(this.url + '/user/signup', user)
  }

}
