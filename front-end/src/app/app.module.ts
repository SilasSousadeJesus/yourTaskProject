import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AuthserviceService } from "./components/auth/authservice/authservice.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    InfoUserComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthserviceService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
