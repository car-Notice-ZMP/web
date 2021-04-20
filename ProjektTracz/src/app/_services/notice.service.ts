import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Notice} from '../shared/_models/Notice';

@Injectable()
export class NoticeService {

  constructor(private http: HttpClient) {
  }

  storeNotice(notice: Notice): Observable<Notice> {
    return this.http.post('https://citygame.ga/api/notices/store', notice);
  }
}
