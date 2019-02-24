import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'boot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menuItems: any[];
  @Output() viewChanged: EventEmitter<string> = new EventEmitter<string>();

  activeView: string;
  dropdownItems: any[] = [];

  constructor() { }

  selectItem(item): void {
    if (item.subItems && item.subItems.length) {
      this.dropdownItems = item.subItems;
      return;
    }
    this.activeView = item.alias;
    this.viewChanged.emit(this.activeView);
  }

}
