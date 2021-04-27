import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subject} from 'rxjs';
import {User} from '../shared/_models/User';

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

  /* od tego jeszcze nie ma api
  update(userID: string, user: any): void {
    this.http.patch('https://citygame.ga/' + userID, user).subscribe(
      response => {
        this.setUser(response as User);
        console.log(response);
        this.openSnackBar('Changed successfully', 'Close');
      },
      error => {
        this.openSnackBar('Change failed', 'Close');
      });
  }

  delete(userID: string): void {
    this.http.delete('http://localhost:3000/user/' + userID).subscribe(
      response => {
        this.router.navigate(['h']);
        this.dialog.closeAll();
      });
  }

  get(userID: string): void {
    this.http.get('http://localhost:3000/user/' + userID).subscribe(
      response => {
        // @ts-ignore
        this.setUser(response.data);
      });
  }
  */
}
