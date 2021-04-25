import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {Login} from '../../shared/_models/Login';
import {ColorSchemeService} from '../../_services/color-scheme.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInUserModel = new Login('', '');
  checked = false;
  hide = true;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private colorSchemeService: ColorSchemeService) {
    this.checkSlideToggle();
    this.colorSchemeService.load();
  }

  checkSlideToggle(): void {
    if (localStorage.getItem('prefers-color') === 'dark') {
      this.checked = true;
    }
  }

  openSignUp(): void {
    this.router.navigate(['register']);
  }

  setTheme(): void {
    if (localStorage.getItem('prefers-color') === 'light') {
      this.colorSchemeService.update('dark');
    } else {
      this.colorSchemeService.update('light');
    }
  }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authenticationService.SignIn(this.signInUserModel);
  }
}
