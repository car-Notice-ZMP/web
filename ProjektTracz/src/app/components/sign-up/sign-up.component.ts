import { Component, OnInit } from '@angular/core';
import {ColorSchemeService} from '../../_services/color-scheme.service';
import {Router} from '@angular/router';
import {Register} from '../../_models/Register';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpUserModel = new Register('', '', '', '');
  checked = false;
  hide = true;

  constructor(private colorSchemeService: ColorSchemeService,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  checkSlideToggle(): void {
    if (localStorage.getItem('prefers-color') === 'dark') {
      this.checked = true;
    }
  }

  setTheme(): void {
    if (localStorage.getItem('prefers-color') === 'light') {
      this.colorSchemeService.update('dark');
    } else {
      this.colorSchemeService.update('light');
    }
  }

  signUp(): void {
    this.authenticationService.QuietlySignUp(this.signUpUserModel);
  }

  openSignIn(): void {
    this.router.navigate(['login']);
  }


  ngOnInit(): void {
  }

}
