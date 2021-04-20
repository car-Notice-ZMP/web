import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../shared/_models/User';
import {UserService} from './user.service';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  loggedIn = false;
  isAdmin = false;
  currentUser: User = new User();

  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private userService: UserService,
              private jwtHelper: JwtHelperService) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }


  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  login(emailAndPassword): void {
    this.userService.login(emailAndPassword).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        this.loggedIn = true;
        this.router.navigate(['profile']);
      }, error => this.openSnackBar('Invalid email or password!', '')
    );
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token): object {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser): void {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.name = decodedUser.name;
    this.currentUser.role = decodedUser.role;
    this.isAdmin = decodedUser.role === 'admin';
    delete decodedUser.role;
  }

}


