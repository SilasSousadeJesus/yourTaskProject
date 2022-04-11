import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from "../info-user/userService/user-service.service";

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {


  user: any = [{
    id: '',
    name: '',
    email: '',
    password: '',
    token:''
  }]

  constructor(private userService: UserServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.CurrentUser();
  }


  userIdent(){
    const userCurrent = <any> this.userService.UserIdent()
    const userCurrentId = userCurrent.id
    return userCurrentId
  }

  CurrentUser(){

    this.userService.getuser(this.userIdent()).subscribe(res=>{
      return this.user = res
    }, err=> console.log(err))

  }

  updateUser(){
    this.userService.editeUser(this.userIdent(), this.user).subscribe(res=>{
      this.user = res
      this.CurrentUser();
    },  err=> console.log(err));
  }

  deleteUser(){

    this.userService.deleteUser(this.userIdent()).subscribe(res=>{

    }, err => console.log(err))

    this.router.navigate(['/home'])
    sessionStorage.removeItem('token');

  }

}
