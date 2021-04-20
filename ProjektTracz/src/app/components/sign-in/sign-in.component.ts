import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.email,
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  openSignUp(): void {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
    if (this.authenticationService.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  setClassEmail(): object {
    return {'has-danger': !this.email.pristine && !this.email.valid};
  }

  setClassPassword(): object {
    return {'has-danger': !this.password.pristine && !this.password.valid};

  }

  signIn(): void {
    this.authenticationService.login(this.loginForm.value);
  }
}
