import { Injectable } from '@angular/core';
import {NoticeService} from './notice.service';
import {Notice} from '../shared/_models/Notice';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateNoticeService {

  constructor(private router: Router,
              private noticeService: NoticeService) {

  }

  createNotice(notice: Notice): any {
    this.noticeService.storeNotice(notice).toPromise()
      .then(
        response => {
          console.log(response);
        }
      );
  }

}
