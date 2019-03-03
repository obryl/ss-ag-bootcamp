import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { MenuItemsService } from '@shared/services/menu-items.service';
import { AuthService } from './auth/services/auth.service';

import { Subscription } from 'rxjs';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  headerItems: { label: string; alias: string; subItems: any[] }[] = [];
  userInfo: any;
  isLoggedIn = true;
  showSpinner = false;

  private isLoggedIn$: Subscription;

  constructor(
    private menuItemsService: MenuItemsService,
    private authService: AuthService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.authService.initUser();
    this.menuItemsService.getMenuItems().subscribe(data => {
      this.headerItems = data;
    });
    this.spinnerService.showSpinner.subscribe((value) => {
      this.showSpinner = value;
    });
  }

  ngAfterViewInit(): void {
    this.authService.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.userInfo = this.authService.getUser();
      }
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy(): void {
    this.isLoggedIn$.unsubscribe();
  }
}
