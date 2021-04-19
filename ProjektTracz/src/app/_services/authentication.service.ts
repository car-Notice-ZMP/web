import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

import {Login} from '../_models/Login';
import {Register} from '../_models/Register';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SocialAuthService} from 'angularx-social-login';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;

  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              private authService: SocialAuthService,
              private snackBar: MatSnackBar) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  SignUp(user: Register): Subscription {
    return this.http.post('http://34.122.22.62:8080/api/auth/register', user).subscribe(
      response => {
        this.openSnackBar('User registered successfully', '');
        // @ts-ignore
        console.log('User Signed Up');
        // @ts-ignore
        localStorage.setItem('userID', response.data.user.id);
        this.dialog.closeAll();
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error.status, error.message);
      }
    );

  }

  SignIn(user: Login): Subscription {
    return this.http.post('http://34.122.22.62:8080/api/auth/login', user).subscribe(
      message => {
        console.log(message);
        localStorage.setItem('socialLogin', 'false');
        // @ts-ignore
        this.logIn();
        console.log('User signed in. ');
        this.openSnackBar('User signed successfully', '');
        this.dialog.closeAll();
        this.router.navigate(['profile']);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
      }
    );
  }

  QuietlySignUp(user: Register): Subscription {
    return this.http.post('http://34.122.22.62:8080/api/auth/register', user).subscribe(
      message => {
        console.log('User Signed Up');
        // @ts-ignore
        localStorage.setItem('userID', message.data.user.id);
      },
      error => {
        console.log('Error:', error.status, error.statusText);
      }
    );

  }

  QuietlySignIn(user: Login): Subscription {

    return this.http.post('http://34.122.22.62:8080/api/auth/login', user).subscribe(
      message => {
        // @ts-ignore
        this.user = message.data.user;
        this.logIn();
        console.log('User signed in. ');
        // @ts-ignore
        localStorage.setItem('name', message.data.user.username);
        // @ts-ignore
        localStorage.setItem('authToken', message.data.user.authentication_token);
        // @ts-ignore
        localStorage.setItem('userID', message.data.user.id);
        this.router.navigate(['profile']);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error);
      }
    );
  }


  logIn(): void {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logOut(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.authService.signOut(true);
    this.router.navigate(['h']);
  }
}
