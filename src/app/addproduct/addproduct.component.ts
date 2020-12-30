import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductnService } from '../productn.service';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product: Product = new Product();
  msg!: string;
  error!: string;
  loginerror!: string;
  @ViewChild('frm')
  form: NgForm;

  constructor(
    public productnService: ProductnService,
    public usernService: UsernService
  ) {}

  ngOnInit(): void {
    if (!this.usernService.username) {
      this.msg = 'Please Login to Add products!';
      this.loginerror = 'Not Logged';
    }
  }

  add() {
    this.productnService.addproduct(this.product).subscribe(data => {
      if (data.error) {
        this.error = data.error;
      } else {
        this.msg = data.msg;
      }
    });

    this.product = new Product();
    this.form.reset();
  }
}
