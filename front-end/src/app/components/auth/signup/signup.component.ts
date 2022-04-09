import { AuthserviceService } from './../authservice/authservice.service';
import { Component, OnInit } from '@angular/core';

import { User } from './../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:User = {
    name: '',
    email: '',
    password:'',
    token:''
  } ;

  constructor(
    private authservice: AuthserviceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  register(){
    this.authservice.signUp(this.user).subscribe(res=>{
      console.log(res)
     // this.router.navigate(['/login'])
    }, err=>{
      console.log(err)
    })
  }

}
