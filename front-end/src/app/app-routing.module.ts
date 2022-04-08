import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [


      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      },
      {
        path:'home', component: HomeComponent
      },
      {
        path:'signup', component: SignupComponent
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
