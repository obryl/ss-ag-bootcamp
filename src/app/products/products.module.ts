import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

import { FilterPipe} from '@shared/pipes/filter.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddNewProductModalComponent } from './modals/add-new-product-modal/add-new-product-modal.component';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductListItemComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    AddNewProductModalComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    AngularFirestoreModule,
    ProductsRoutingModule
  ],
  entryComponents: [
    AddNewProductModalComponent
  ],
  providers: [
    ProductsService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ]
})
export class ProductsModule { }
