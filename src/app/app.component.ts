import { Component, OnInit } from '@angular/core';

import { MenuItemsService } from '@shared/services/menu-items.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headerItems: { label: string; alias: string; subItems: any[] }[] = [];
  userInfo: any;

  constructor(
    private menuItemsService: MenuItemsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.initUser();
    this.authService.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.userInfo = this.authService.getUser();
      }
    });
    this.menuItemsService.getMenuItems().subscribe(data => {
      this.headerItems = data;
    });
  }
}
