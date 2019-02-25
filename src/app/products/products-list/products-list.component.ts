import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productItemModel } from '../models/product-list.model';
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: productItemModel[] = [];
  searchQuery: string;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.productsService.getProducts().subscribe((products: productItemModel[]) => {
        this.products = res.categoryId === 'all' ? products : products.filter(p => p.category.toLowerCase() === res.categoryId);
      });
    });
  }

}
