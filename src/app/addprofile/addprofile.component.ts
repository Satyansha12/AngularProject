import { Component, OnInit, ViewChild } from '@angular/core';
import { Profileuser } from '../profileuser';
import { UsernService } from '../usern.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
  profileuser: Profileuser = new Profileuser();
  error!: string;
  msg!: string;
  @ViewChild('frm')
  form: NgForm;

  constructor(public usernService: UsernService) {}

  ngOnInit(): void {}

  addprofile() {
    this.usernService.addprofile(this.profileuser).subscribe(data => {
      if (data.error) {
        this.error = data.error;
      } else {
        this.msg = data.msg;
      }
    });

    this.profileuser = new Profileuser();
    this.form.reset();
  }
}
