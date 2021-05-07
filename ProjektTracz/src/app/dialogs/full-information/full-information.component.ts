import { Component, OnInit } from '@angular/core';
import {ResponseNotice} from '../../shared/_models/ResponseNotice';
import {NoticeService} from '../../_services/notice.service';

@Component({
  selector: 'app-full-information',
  templateUrl: './full-information.component.html',
  styleUrls: ['./full-information.component.scss']
})
export class FullInformationComponent implements OnInit {
  card = new ResponseNotice('',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    [],
    '',
    '');
  noticeArray: Array<ResponseNotice>;
  constructor(private noticeService: NoticeService) {
    this.noticeService.showSpecificNotice().toPromise()
      .then(response => {
        console.log(response);
        this.noticeArray = [];
        this.noticeArray = response;
      });
  }

  ngOnInit(): void {
  }

}
