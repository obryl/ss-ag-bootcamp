import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'boot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuItems: any[];

  selectedItem: any = {};

  constructor() { }

  ngOnInit() {
  }

  selectItem(item): void {
    this.selectedItem = item;
  }

}
