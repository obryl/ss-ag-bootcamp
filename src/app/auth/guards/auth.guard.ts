import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.authService.isLoggedIn.getValue()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
