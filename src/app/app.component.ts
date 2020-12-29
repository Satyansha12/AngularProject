import { Component } from '@angular/core';
import { AddproductService } from './addproduct.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showme: boolean = false;
  title = 'angular-project';
  username: string;

  constructor() {}
  ngOnInit(): void {

    }
  }

