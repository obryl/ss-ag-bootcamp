import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'boot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menuItems: any[];
  @Input() isLoggedIn: boolean;

  dropdownItems: any[] = [];

  constructor(private router: Router) { }

  selectItem(item): void {
    if (item.subItems && item.subItems.length) {
      this.dropdownItems = item.subItems;
      return;
    }
    this.router.navigate([item.alias]);
  }

  goToAuth(): void {
    this.router.navigate(['auth']);
  }
}
