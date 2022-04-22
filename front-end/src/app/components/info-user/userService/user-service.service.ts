import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../../auth/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url ='https://yourtaskproject.herokuapp.com'
  helper = new JwtHelperService();

  currentUser: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    token:''
  }

  constructor(private http: HttpClient) { }

  UserIdent(){

    const getToken:any = sessionStorage.getItem('token')

    const decodedToken = this.helper.decodeToken(getToken)

    this.currentUser.id = decodedToken.id;

    return this.currentUser

  }

  getuser(id:string){
    return this.http.get(`${this.url}/user/showUser/${id}`)
  }

  deleteUser(id:String){

    return this.http.delete(`${this.url}/user/delete/${id}`)

  }

  editeUser(id:string, user:User){
    return this.http.post(`${this.url}/user/update/${id}`, user)
  }


}
