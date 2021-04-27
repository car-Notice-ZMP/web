import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
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

  // tslint:disable-next-line:typedef
  SignUp(user: Register) {
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

  SignIn(user: Login): Subscription {
    return this.userService.login(user).subscribe(
      response => {
        // localStorage.setItem('socialLogin', 'false');
        console.log(response);
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('isLoggedIn', 'true');
        console.log('User signed in. ');
        this.openSnackBar('User signed successfully', '');
        this.router.navigate(['profile']);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
      }
    );
  }

  getUserInfo(user: User): void {
    this.userService.getUser().subscribe(
      res => {
        console.log(res);
        localStorage.getItem('name');
        localStorage.getItem('email');
        localStorage.getItem('email_verified_at');
        localStorage.getItem('avatar');
      },
      err => {
        console.log(err);
      }
    );
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('refreshed');
    this.router.navigate(['h']);
  }
}
