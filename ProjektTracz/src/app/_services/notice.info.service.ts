import {BehaviorSubject} from 'rxjs';
import {ResponseNotice} from '../shared/_models/ResponseNotice';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class NoticeInfoService {
  private notice = new ResponseNotice('', '', '', '', '', '', '', '', '', '', '', [], '', '');
  private noticeSource = new BehaviorSubject(this.notice);
  currentNotice = this.noticeSource.asObservable();

  changeNotice(newNotice: ResponseNotice): void {
    this.noticeSource.next(newNotice);
  }
}
