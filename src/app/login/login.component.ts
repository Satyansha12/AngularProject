import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Loginuser } from '../loginuser';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginuser: Loginuser = new Loginuser();
  msg!: string;
  error!: string;
  @ViewChild('frm')
  form: NgForm;
  constructor(public usernService: UsernService) {}

  ngOnInit(): void {}

  login(): void {
    this.usernService.loginuser(this.loginuser).subscribe(data => {
      if (data.error) {
        this.error = data.error;
      } else {
        this.msg = data.msg;
        this.usernService.addusername(data.doc.username);
      }
    });

    this.loginuser = new Loginuser();
    this.form.reset();
  }
}
