import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Register} from '../../shared/_models/Register';
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

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }


  signUp(): void {
    this.authenticationService.SignUp(this.signUpUserModel);
  }

  openSignIn(): void {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
