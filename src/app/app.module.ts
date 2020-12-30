import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, AddprofileComponent, ViewprofileComponent, LogoutComponent, ViewallusersComponent, HomeComponent, PagenotfoundComponent, AddproductComponent, ViewallproductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
