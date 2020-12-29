import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddproductService } from '../addproduct.service';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product: Product = new Product();
  msg!: string;
  error!: string;
  @ViewChild('frm')
  form: NgForm;

  constructor(public addproductService: AddproductService) { }

  ngOnInit(): void {}

  add(){
    this.addproductService.addproduct(this.product).subscribe((data => {
     console.log(data);
     this.msg=data.msg;
     if(this.msg.includes("Inserted"))
     this.form.reset();
    }),error=>{console.log(error)}
    )}

}
