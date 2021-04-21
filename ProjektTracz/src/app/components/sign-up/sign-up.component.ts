import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {UserService} from '../../_services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;

  registerForm: FormGroup;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
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
  passwordConfirmation = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }


  register(): void {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.openSnackBar('Udało się zarejestrować! ', '');
        this.router.navigate(['login']);
      },
      error => this.openSnackBar('Użytkownik z takim e-mailem już istnieje!', '')
    );
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openSignIn(): void {
    this.router.navigate(['login']);
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    });
  }

  setClassUsername(): object {
    return {'has-danger': !this.username.pristine && !this.username.valid};
  }

  setClassEmail(): object {
    return {'has-danger': !this.email.pristine && !this.email.valid};
  }

  setClassPassword(): object {
    return {'has-danger': !this.password.pristine && !this.password.valid};
  }

  setClassPasswordConfirmation(): object {
    return {
      'has-danger': !this.passwordConfirmation.pristine
        && !this.passwordConfirmation.valid
        && this.passwordConfirmation.valid === this.password.valid
    };
  }

}
