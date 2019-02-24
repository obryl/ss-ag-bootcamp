import { Component, OnInit } from '@angular/core';

import { productItemModel } from './models/product-list.model';
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: productItemModel[] = [];
  searchQuery: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: productItemModel[]) => {
      this.products = products;
    });
  }

}
