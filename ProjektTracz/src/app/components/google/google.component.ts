import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../_services/authentication.service';
import {Login} from '../../shared/_models/Login';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

export class GoogleComponent implements OnInit {
  socialUser: SocialUser;
  isLoggedIn: boolean;
  loginForm: FormGroup;
  loginUserModel = new Login('', '');

  constructor(private socialAuthService: SocialAuthService,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) {
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authenticationService.QuietlySignIn(this.loginUserModel);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = (user != null);
      console.log(this.socialUser);
    });
  }
}
