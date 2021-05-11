import {Injectable} from '@angular/core';
import {SocialAuthService, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Login} from '../shared/_models/Login';

@Injectable({providedIn: 'root'})
export class SocialService {
  constructor(private authService: SocialAuthService,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  user: SocialUser;
  login = new Login('', '');


}
