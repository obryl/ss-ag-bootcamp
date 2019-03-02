import { Component, OnInit, Input } from '@angular/core';
import { productItemModel } from '../models/product-list.model';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'boot-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input()
  product: productItemModel;
  isDeleteVisible: boolean;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.isDeleteVisible = this.authService.isAdmin();
  }

  deleteItem(item: productItemModel): void {
    this.productsService.deleteProduct(item.id).then(() => {
      // handle result ... show message
    });
  }

}
