import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: any[] = [{
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

  selectedItem: any = {};

  constructor() { }

  ngOnInit() {
  }

  selectItem(item): void {
    this.selectedItem = item;
  }

}
