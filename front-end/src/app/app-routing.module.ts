import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { InfoUserComponent } from './components/info-user/info-user.component';

const routes: Routes = [


      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      },
      {
        path:'home', component: HomeComponent
      },
      {
        path:'signup', component: SignupComponent
      },
      {
        path:'login', component: LoginComponent
      },
      {
        path:'infoUser', component: InfoUserComponent
      }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
