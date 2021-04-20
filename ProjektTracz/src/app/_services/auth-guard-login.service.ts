import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthenticationService) {}

  canActivate(): boolean {
    return this.auth.loggedIn;
  }

}
