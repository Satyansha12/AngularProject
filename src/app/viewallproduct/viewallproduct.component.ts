import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductnService } from '../productn.service';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-viewallproduct',
  templateUrl: './viewallproduct.component.html',
  styleUrls: ['./viewallproduct.component.css']
})
export class ViewallproductComponent implements OnInit {
  productid: string;
  pname: string;
  category: string;
  iscancelled: string = '';
  price: Int32Array;
  description:string;
  username: any;
  msg: string;
  data: string;

  constructor(public usernService: UsernService) { 
    this.username = localStorage.getItem('username');
    this.username = '';
  }

  ngOnInit(): void {
    // this.getprofile();
    this.usernService.viewproductbymerchantid('5fe57d4e44772a04f54ea197').subscribe(data => {
     console.log(data);
     this.data = data;
   });
   }
   viewproductbymerchantid(): void {
     if (!this.username) {
       this.msg = 'User not logged in. Login please';
       return;
     } else {
       this.usernService.viewproductbymerchantid(this.username).subscribe(data => {
         console.log(data);
         this.data = data;
       });
     }
   }
 
 }
