import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Login} from '../shared/_models/Login';
import {Register} from '../shared/_models/Register';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from './user.service';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;
  user: any;

  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  SignUp(user: Register): Subscription {
    return this.userService.register(user).subscribe(
      response => {
        this.openSnackBar('User registered successfully', '');
        console.log('User Signed Up');
        this.user = response;
        this.dialog.closeAll();
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error.status, error.message);
      }
    );

  }

  SignIn(user: Login): Subscription {
    return this.userService.login(user).subscribe(
      response => {
        // localStorage.setItem('socialLogin', 'false');
        console.log(response);
        this.logIn();
        console.log('User signed in. ');
        localStorage.setItem('username', response.name);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userID', response.userID);
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
    return this.userService.register(user).subscribe(
      response => {
        console.log('User Signed Up');
        // @ts-ignore
        basicCategoriesService.load(response.data.user.id);
        // @ts-ignore
        localStorage.setItem('userID', response.data.user.id);
      },
      error => {
        console.log('Error:', error.status, error.statusText);
      }
    );

  }

  QuietlySignIn(user: Login): Subscription {
    return this.userService.login(user).subscribe(
      response => {
        // @ts-ignore
        this.user = response.data.user;
        this.logIn();
        console.log('User signed in. ');
        // @ts-ignore
        localStorage.setItem('username', response.data.user.username);
        // @ts-ignore
        localStorage.setItem('authToken', response.data.user.authentication_token);
        // @ts-ignore
        localStorage.setItem('userID', response.data.user.id);
        this.router.navigate(['signed-in']);
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
    // this.authService.signOut(true);
    this.router.navigate(['h']);
  }
}
