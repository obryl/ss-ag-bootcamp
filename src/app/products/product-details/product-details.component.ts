import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';
import { productItemModel } from '../models/product-list.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'boot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: productItemModel;
  isActionsVisible: boolean;

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.isActionsVisible = this.authService.isAdmin();
    this.activatedRoute.data.subscribe((res: any) => {
      this.product = res.detailsData;
    });
  }

  deleteItem(): void {
    this.productsService.deleteProduct(this.product.id).then(() => {
      this.router.navigate(['/products', 'all']);
    });
  }
}
