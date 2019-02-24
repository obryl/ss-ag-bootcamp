import { Component, OnInit } from '@angular/core';

import { MenuItemsService } from '@shared/services/menu-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeView = 'main';
  headerItems: { label: string; alias: string; subItems: any[] }[] = [];

  constructor(private menuItemsService: MenuItemsService) { }

  ngOnInit(): void {
    this.menuItemsService.getMenuItems().subscribe(data => {
      this.headerItems = data;
    });
  }

  changeView(view): void {
    this.activeView = view;
  }
}
