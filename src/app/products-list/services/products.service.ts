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
}
