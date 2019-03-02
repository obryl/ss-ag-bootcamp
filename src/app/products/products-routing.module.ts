import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [{
      path: ':categoryId',
      component: ProductsListComponent
    }, {
      path: ':categoryId/:productId',
      component: ProductDetailsComponent
    },
    {
      path: '',
      redirectTo: 'all'
    }]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
