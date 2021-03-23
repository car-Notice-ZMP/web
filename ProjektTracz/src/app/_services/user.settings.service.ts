import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {Subject} from 'rxjs';
import {User} from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  userSource = new Subject<User>();
  userObservable = this.userSource.asObservable();
  userID = localStorage.getItem('userID');

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setUser(user: User): void {
    this.userSource.next(user);
  }

  get(userID: string): void {
    this.http.get('http://34.122.22.62:8080/api/auth/profile' + userID).subscribe(
      response => {
        // @ts-ignore
        this.setUser(response.data);
      });
  }
}
