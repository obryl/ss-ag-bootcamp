import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FilterPipe} from '@shared/pipes/filter.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    AngularFirestoreModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ]
})
export class ProductsModule { }
