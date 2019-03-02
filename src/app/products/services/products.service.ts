import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productItemModel } from '../models/product-list.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  getProducts(): Observable<productItemModel[]> {
    return this.firestore.collection<productItemModel[]>('products').snapshotChanges()
      .pipe(map((products) => {
        return products.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        }) as any[];
      }));
  }

  getProduct(id: string): Observable<productItemModel> {
    return this.firestore.doc('products/' + id).get().pipe(map(data => {
      return {
        id: data.id,
        ...data.data()
      } as any;
    }));
  }

  createProduct(product: productItemModel): Promise<any> {
    return this.firestore.collection('products').add(product);
  }

  updateProduct(product: productItemModel): Promise<void> {
    return this.firestore.doc(`products/${product.id}`).update(product);
  }

  deleteProduct(id: string): Promise<void> {
    return this.firestore.doc('products/' + id).delete();
  }
}
