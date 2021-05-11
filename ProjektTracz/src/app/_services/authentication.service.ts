import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {Login} from '../shared/_models/Login';
import {Register} from '../shared/_models/Register';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from './user.service';
import {User} from '../shared/_models/User';
import {SnackBar} from '../_helpers/snackbar.helper';


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
              private snackBar: SnackBar,
              private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  SignUp(user: Register): Subscription {
    return this.userService.register(user).subscribe(
      response => {
        this.snackBar.open('Zarejestrowano prawidłowo', 'X');
        localStorage.setItem('token', response.token);
      },
      error => {
        this.snackBar.open('Coś poszło nie tak', 'X');
        console.log('Error:', error.status, error.message);
      }
    );

  }

  SignIn(user: Login): Subscription {
    return this.userService.login(user).subscribe(
      response => {
        localStorage.setItem('token', response.access_token);
        console.log('User signed in. ');
        this.snackBar.open('Zalogowano pomyślnie', 'X');
        this.router.navigate(['profile']);
      },
      error => {
        this.snackBar.open('Nieprawidłowy login lub hasło! ', 'X');
      }
    );
  }

  QuietlySignIn(user: Login): Subscription {
    return this.userService.login(user).subscribe(
      response => {
        localStorage.setItem('token', response.idtoken);
        this.loggedIn();
        this.router.navigate(['profile']);
      },
      error => {
        this.snackBar.open('Coś poszło nie tak', 'X');
        console.log('Error:', error);
      }
    );
  }

  loggedIn(): any {
    localStorage.setItem('isLoggedIn', 'true');
    return !!localStorage.getItem('token');
  }


  getToken(): any {
    return localStorage.getItem('token');
  }

  getUserInfo(): any {
    return this.userService.getUser().subscribe(
      res => {
        this.setUser(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  setUser(user: User): void {
    this.userSource.next(user);
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['h']);
  }
}
