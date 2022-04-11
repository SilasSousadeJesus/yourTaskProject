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

  CurrentUser(){

    const userCurrent = <any> this.userService.UserIdent();
    const userId = userCurrent.id

    this.userService.getuser(userId).subscribe(res=>{
      return this.user = res
    }, err=> console.log(err))

  }

  updateUser(){
    const userCurrent = <any> this.userService.UserIdent();
    const userId = userCurrent.id;

    this.userService.editeUser(userId, this.user).subscribe(res=>{
      this.user = res
      this.CurrentUser();
    },  err=> console.log(err));


  }

  deleteUser(){

    const userCurrent = <any> this.userService.UserIdent();
    const userId = userCurrent.id

    this.userService.deleteUser(userId).subscribe(res=>{

    }, err => console.log(err))

    this.router.navigate(['/home'])
    sessionStorage.removeItem('token');

  }

}
