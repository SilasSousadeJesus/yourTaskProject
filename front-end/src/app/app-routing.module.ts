import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthGuardGuard } from './components/guards/auth-guard.guard';
import { HomeComponent } from './components/home/home.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
        path:'infoUser', component: InfoUserComponent, canActivate: [AuthGuardGuard]
      },
      { 
        path: 'projeto', canActivate: [AuthGuardGuard], loadChildren: () => import('./components/projects/modules/project-module.module').then(m => m.ProjectModuleModule) 
      },
      {
        path:'**', component: PageNotFoundComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
