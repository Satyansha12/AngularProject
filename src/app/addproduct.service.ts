import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  [x: string]: any;
  username: string;
  constructor(public http: HttpClient) { }
  addproduct(product: Product): Observable<any> {
    console.log(product);
    return this.http.post(`http://localhost:7070/products/addproduct`, product);
  }

}
