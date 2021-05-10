import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notice} from '../shared/_models/Notice';
import {ResponseNotice} from '../shared/_models/ResponseNotice';
import {Searchable} from '../shared/_models/Searchable';
import {MailTo} from '../shared/_models/MailTo';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class NoticeService {

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
  }

  storeNotice(notice): any {
    return this.http.post('https://citygame.ga/api/notices/store', notice, {headers: {Authorization: `Bearer ${this.token}`}});
  }

  showAllNotices(): Observable<Array<ResponseNotice>> {
    return this.http.get<Array<ResponseNotice>>('https://citygame.ga/api/notices/all', {headers: {Authorization: `Bearer ${this.token}`}});
  }

  showSpecificNotice(id: string): Observable<Array<ResponseNotice>> {
    return this.http.get<Array<ResponseNotice>>
    ('https://citygame.ga/api/notices/show/' + id, {headers: {Authorization: `Bearer ${this.token}`}});
  }

  searchNotices(search: Searchable): Observable<Array<Searchable>> {
    return this.http.post<Array<Searchable>>
    ('https://citygame.ga/api/notices/search', search, {headers: {Authorization: `Bearer ${this.token}`}});
  }

  addToFavourite(id: string): Observable<Array<ResponseNotice>> {
    return this.http.post <Array<ResponseNotice>>
    ('https://citygame.ga/api/fav/' + id + '/store/', {headers: {Authorization: `Bearer ${this.token}`}});
  }

  addComment(id: string, comment): any {
    return this.http.post('https://citygame.ga/api/comments/' + id + '/store', comment, {headers: {Authorization: `Bearer ${this.token}`}});
  }
}
