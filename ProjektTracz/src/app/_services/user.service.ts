import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/_models/User';
import {Register} from '../shared/_models/Register';
import {Login} from '../shared/_models/Login';

@Injectable()
export class UserService {

  token: string;

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<any> {
    return this.http.post<any>('https://citygame.ga/api/auth/register', user);
  }

  login(user): Observable<any> {
    return this.http.post<any>('https://citygame.ga/api/auth/login', user);
  }

  /* możliwe że przyda się jak będzie stało api do takich rzeczy
     zbieranie wszystkich użytkowników
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('')
  }
     zliczanie wszystkich użytkowników
  countUsers(): Observable<number> {
    return this.http.get<number>('')
  }
  */

  getUser(): Observable<User> {
    return this.http.get<User>('https://citygame.ga/api/auth/profile/', {headers: {Authorization: `Bearer ${this.token}`}});
  }

  // do tej funkcji nie widziałem puta w Insomnii
  editUser(user: User): Observable<any> {
    return this.http.put('https://citygame.ga/api/auth/profile/${user._id}', user, {responseType: 'text'});
  }

  // do tej też
  deleteUser(user: User): Observable<any> {
    return this.http.delete('https://citygame.ga/api/auth/profile/${user._id}', {responseType: 'text'});
  }

  // chokepoint

}
