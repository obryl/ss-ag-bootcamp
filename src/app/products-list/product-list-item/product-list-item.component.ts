import { Component, OnInit, Input } from '@angular/core';
import { productItemModel } from '../models/product-list.model';

@Component({
  selector: 'boot-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input()
  product: productItemModel;

  constructor() { }

  ngOnInit() {
  }

}
