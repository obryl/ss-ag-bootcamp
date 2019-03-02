import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private activeRequestsCount = 0;
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  handleRequestStart(): void {
    this.activeRequestsCount++;
    this.showSpinner.next(this.activeRequestsCount === 1);
  }

  handleRequestEnd(): void {
    this.activeRequestsCount--;
    this.showSpinner.next(!this.activeRequestsCount);
  }
}
