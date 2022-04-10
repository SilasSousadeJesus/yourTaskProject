import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthserviceService } from '../auth/authservice/authservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthserviceService,
    private router: Router){}


  canActivate():boolean {

    if(this.authService.loggedIn()){
      return true;
    }
    this.router.navigate(["/home"])
    return false;

  }

}
