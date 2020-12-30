import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { UsernService } from './usern.service';

@Injectable({
  providedIn: 'root'
})
export class ProductnService {
  constructor(public usernService: UsernService, public http: HttpClient) {}
  addproduct(product: Product): Observable<any> {
    return this.http.post(
      `http://localhost:8080/product/${this.usernService.username}/merchaddproduct`,
      product
    );
  }

  getproduct(product: Product): Observable<any> {
    return this.http.get(
      `http://localhost:8080/product/${this.usernService.username}/merchaddproduct`
    );
  }
  
}
