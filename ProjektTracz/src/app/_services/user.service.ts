import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/_models/User';

@Injectable()
export class UserService {

  token: string;

  constructor(private http: HttpClient) {
  }

  register(user): Observable<any> {
    return this.http.post<any>('https://citygame.ga/api/auth/register', user);
  }

  login(user): Observable<any> {
    return this.http.post<any>('https://citygame.ga/api/auth/login', user);
  }

  getUser(): Observable<User> {
    return this.http.get<User>('https://citygame.ga/api/auth/profile', {headers: {Authorization: `Bearer ${this.token}`}});
  }



}
