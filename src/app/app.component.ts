import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { MenuItemsService } from '@shared/services/menu-items.service';
import { AuthService } from './auth/services/auth.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  headerItems: { label: string; alias: string; subItems: any[] }[] = [];
  userInfo: any;
  isLoggedIn = false;

  private isLoggedIn$: Subscription;

  constructor(
    private menuItemsService: MenuItemsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.menuItemsService.getMenuItems().subscribe(data => {
      this.headerItems = data;
    });
  }

  ngAfterViewInit(): void {
    this.authService.initUser();
    this.authService.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.userInfo = this.authService.getUser();
      }
      // life hack to avoid ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        this.isLoggedIn = isLoggedIn;
      });
    });
  }

  ngOnDestroy(): void {
    this.isLoggedIn$.unsubscribe();
  }
}
