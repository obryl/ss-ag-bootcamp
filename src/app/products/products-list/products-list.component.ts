import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';
import { AddNewProductModalComponent } from '../modals/add-new-product-modal/add-new-product-modal.component';
import { productItemModel } from '../models/product-list.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: productItemModel[] = [];
  searchQuery: string;
  isAdmin: boolean;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.activatedRoute.params.subscribe((res: any) => {
      this.productsService.getProducts().subscribe((products: productItemModel[]) => {
        this.products = res.categoryId === 'all' ? products : products.filter(p => p.category.toLowerCase() === res.categoryId);
      });
    });
  }

  openAddNewProduct(): void {
    const dialogRef = this.dialog.open(AddNewProductModalComponent, {
      width: '450px',
      data: {
        name: null,
        price: null,
        category: null,
        description: null,
        imgUrl: null,
        isHidden: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productsService.createProduct(result);
      }
    });
  }

}
