import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProductsService } from '../services/products.service';
import { productItemModel } from '../models/product-list.model';

@Injectable()
export class ProductDetailsResolver implements Resolve<any> {
  constructor(
    private productsService: ProductsService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<productItemModel> {
    return this.productsService.getProduct(route.params.productId).toPromise().then((product: productItemModel) => {
      return product;
    });
  }
}
