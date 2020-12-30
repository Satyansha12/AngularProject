import { Component, OnInit } from '@angular/core';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  msg!: string;
  username: string;
  constructor(public usernService: UsernService) {}

  ngOnInit(): void {
    this.username = this.usernService.username;
    console.log(this.username);
    if (!this.username) {
      this.msg = 'Already logged out!';
    }
  }

  logout() {
    console.log('Logged Out!');
    this.usernService.logoutuser();
    this.msg = 'Logged Out!';
  }

  cancellogout() {
    this.msg = 'Logout Cancelled!';
  }
}
