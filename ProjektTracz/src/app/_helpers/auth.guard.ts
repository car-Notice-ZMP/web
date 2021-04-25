import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor() {
  }

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      console.log('AuthGuard passed');
      return true;
    } else {
      console.log('AuthGuard not passed');
      return false;
    }
  }

  public isLoggedIn(): boolean {
    let status;
    status = localStorage.getItem('isLoggedIn') === 'true';
    return status;
  }
}
