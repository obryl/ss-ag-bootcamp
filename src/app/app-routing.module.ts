import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    loadChildren: './main/main.module#MainModule'
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
