import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './../authservice/authservice.service';
import { User } from './../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User =  {
    name:'',
    email:'',
    password:'',
    token:''
  }

  constructor(private authService: AuthserviceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    return this.authService.sigIni(this.user).subscribe(res=>{
      sessionStorage.setItem('token', res.token)
      this.router.navigate(['/home'])
    })
  }

}
