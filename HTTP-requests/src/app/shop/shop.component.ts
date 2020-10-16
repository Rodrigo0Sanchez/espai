import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
data: Object;
   loading: boolean;
   o :Observable<Object>;
   productData : Product[];
   oFoo : Observable<Product[]>;

   constructor(public http: HttpClient) {}
  ngOnInit(): void {

  }

   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }

  makeRequest() : void
  {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oFoo = this.http.get<Product[]>('https://3000-c0881814-c5b0-4d39-9032-7df53f1a5c90.ws-eu01.gitpod.io/api/products');
    this.oFoo.subscribe(data => {this.productData = data;});
  }




}
