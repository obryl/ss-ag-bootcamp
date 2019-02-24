import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuItemsService {
  constructor(private http: HttpClient) {}

  public getMenuItems(): Observable<any> {
    return this.http.get("./assets/menu-items.json")
  }
}
