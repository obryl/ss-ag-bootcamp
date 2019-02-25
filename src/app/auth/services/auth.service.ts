import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { DEFAULT_USERS } from '../default-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  defaultUsers = DEFAULT_USERS;

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  getUser(): any {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  initUser(): any {
    if (sessionStorage.getItem('user')) {
      this.isLoggedIn.next(true);
    }
  }

  isAdmin(): boolean {
    const user = this.getUser();
    return user && user.role === 'admin';
  }

  login(credentials): Observable<any> {
    const loggedInUser = this.defaultUsers.find(
      (user) => user.username === credentials.username && user.password === credentials.password
    );
    return of(loggedInUser).pipe(
      timeout(500),
      map((response) => {
        if (response) {
          sessionStorage.setItem('user', JSON.stringify(loggedInUser));
          this.setIsLoggedIn(true);
        }
        return response;
      })
    )
  }

  private setIsLoggedIn(loggedIn: boolean): void {
    this.isLoggedIn.next(loggedIn);
  }
}
