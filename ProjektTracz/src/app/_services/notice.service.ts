import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notice} from '../shared/_models/Notice';
import {ResponseNotice} from '../shared/_models/ResponseNotice';

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

  showAllNotices(): Observable<Array<ResponseNotice>> {
    return this.http.get<Array<ResponseNotice>>('https://citygame.ga/api/notices/all', {headers: {Authorization: `Bearer ${this.token}`}});
  }

  showSpecificNotice(): Observable<Array<ResponseNotice>> {
    return this.http.get<Array<ResponseNotice>>
    ('https://citygame.ga/api/notices/show/', {headers: {Authorization: `Bearer ${this.token}`}});
  }
}
