import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productItemModel } from '../models/product-list.model';
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'boot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: productItemModel;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }
productId
  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.productsService.getProduct(res.productId).subscribe((product: productItemModel) => {
        this.product = product;
      });
    });
  }

}
