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
  product: Product = new Product();
  data!: any;
  username: string;
  msg!: string;

  constructor(public productnService: ProductnService,
    public usernService: UsernService) {
    this.username = usernService.username;
   }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct(): void {
    if (!this.username) {
      this.msg = 'User not logged in. Login please';
      return;
    } else {
      this.productnService.getproduct(this.product).subscribe(data => {
        console.log(data);
        this.data = data;
      });
    }
  }

}
