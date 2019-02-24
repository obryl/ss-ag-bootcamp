import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FilterPipe} from '@shared/pipes/filter.pipe';
import { ProductsListComponent } from './products-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductListItemComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsListModule { }
