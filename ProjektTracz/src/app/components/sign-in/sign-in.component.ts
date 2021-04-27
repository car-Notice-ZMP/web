import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {Login} from '../../shared/_models/Login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInUserModel = new Login('', '');
  hide = true;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  openSignUp(): void {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authenticationService.SignIn(this.signInUserModel);
  }
}
