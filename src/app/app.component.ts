import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerItems = [{
    label: 'Main',
    routerLink: '',
    subItems: []
  }, {
    label: 'Products',
    routerLink: 'products',
    subItems: [{
      label: 'Category 2',
      routerLink: 'products'
    }, {
      label: 'Category 3',
      routerLink: 'products'
    }, {
      label: 'Category 4',
      routerLink: 'products'
    }, {
      label: 'Category 5',
      routerLink: 'products'
    }]
  }];
}
