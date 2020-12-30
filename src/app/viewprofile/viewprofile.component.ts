import { Component, OnInit } from '@angular/core';
import { Profileuser } from '../profileuser';
import { UsernService } from '../usern.service';
import { async } from 'q';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  profileuser: Profileuser = new Profileuser();
  data!: any;
  username: string;
  msg!: string;

  constructor(public usernService: UsernService) {
    this.username = usernService.username;
  }

  ngOnInit(): void {
    this.getprofile();
  }

  getprofile(): void {
    if (!this.username) {
      this.msg = 'User not logged in. Login please';
      return;
    } else {
      this.usernService.getprofile(this.username).subscribe(data => {
        console.log(data);
        this.data = data;
      });
    }
  }

  //getProfile();
}
