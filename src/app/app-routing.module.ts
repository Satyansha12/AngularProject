import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewprofile', component: ViewprofileComponent },
  { path: 'addprofile', component: AddprofileComponent },
  { path: 'viewusers', component: ViewallusersComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: 'viewallproduct', component: ViewallproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
