import { Component, OnInit, Input } from '@angular/core';
import { productItemModel } from '../models/product-list.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'boot-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input()
  product: productItemModel;

  categories: any[] = [{
    label: 'BMW'
  }, {
    label: 'Mercedes'
  }, {
    label: 'Zhyguli'
  }, {
    label: 'Audi'
  }, {
    label: 'Toyota'
  }];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: null,
      description: null,
      price: null,
      category: null,
      imgUrl: null,
      isHidden: false
    });
    this.form.valueChanges.subscribe(value => {
      Object.assign(this.product, value);
    });
    if (this.product) {
      this.form.patchValue(this.product);
    }
  }
}
