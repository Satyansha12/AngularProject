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
      `http://localhost:7070/product/${this.usernService.username}/merchaddproduct`,
      product
    );
  }

  
  
}
