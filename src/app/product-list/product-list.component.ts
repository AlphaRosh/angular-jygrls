import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  getClass(price: number) {
    return price < 500
      ? 'text-success'
      : price > 500 && price < 700
      ? 'text-warning'
      : 'text-danger';
  }

  share(val) {
    window.alert(` ${val} has been shared!`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
