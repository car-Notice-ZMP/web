import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {Login} from '../shared/_models/Login';
import {Register} from '../shared/_models/Register';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from './user.service';
import {User} from '../shared/_models/User';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;
  user: any;
  token: string;
  userSource = new Subject<User>();
  userObservable = this.userSource.asObservable();
  userID = localStorage.getItem('userID');

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
        console.log(response);
        localStorage.setItem('token', response.token);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error.status, error.message);
      }
    );

  }

  QuietlySignUp(user: Register): Subscription {
    return this.userService.register(user).subscribe(
      response => {
        console.log('User Signed Up');
        localStorage.setItem('token', response.token);
      },
      error => {
        console.log('Error:', error.status, error.statusText);
      }
    );

  }

  SignIn(user: Login): Subscription {
    return this.userService.login(user).subscribe(
      response => {
        localStorage.setItem('token', response.access_token);
        console.log('User signed in. ');
        this.openSnackBar('User signed successfully', '');
        this.router.navigate(['profile']);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
      }
    );
  }

  QuietlySignIn(user: Login): Subscription {
    return this.userService.login(user).subscribe(
      response => {
        localStorage.setItem('token', response.access_token);
        this.loggedIn();
        console.log('User signed in. ');
        this.router.navigate(['profile']);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  getToken() {
    return localStorage.getItem('token');
  }

  setUser(user: User): void {
    this.userSource.next(user);
  }

  // tslint:disable-next-line:typedef
  getUserInfo(user: User) {
    return this.userService.getUser().subscribe(
      res => {
        // @ts-ignore
        localStorage.setItem('name', res.message.name);
        // @ts-ignore
        localStorage.setItem('email', res.message.email);
        // @ts-ignore
        localStorage.setItem('email_verified_at', res.message.email_verified_at);
        // @ts-ignore
        localStorage.setItem('avatar', res.message.avatar);
      },
      err => {
        console.log(err);
      }
    );
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshed');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('email_verified_at');
    localStorage.removeItem('avatar');
    this.router.navigate(['h']);
  }
}
