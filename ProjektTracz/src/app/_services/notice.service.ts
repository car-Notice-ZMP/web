import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notice} from '../shared/_models/Notice';

@Injectable({
  providedIn: 'root'
})

export class NoticeService {

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
  }

  storeNotice(): Observable<Notice> {
    return this.http.post<Notice>('https://citygame.ga/api/notices/store', {headers: {Authorization: `Bearer ${this.token}`}});
  }
}
