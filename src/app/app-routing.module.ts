import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products/:categoryId',
    loadChildren: './products-list/products-list.module#ProductsListModule'
  },
  {
    path: '',
    loadChildren: './main/main.module#MainModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
