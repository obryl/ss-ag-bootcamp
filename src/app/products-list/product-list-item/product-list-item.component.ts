import { Component, OnInit, Input } from '@angular/core';
import { productItemModel } from '../models/product-list.model';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'boot-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input()
  product: productItemModel;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  deleteItem(item): void {
    this.productsService.deleteProduct(item.id).then(() => {
      // handle result ... show message
    });
  }

}
