import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResponseNotice} from '../../shared/_models/ResponseNotice';
import {NoticeService} from '../../_services/notice.service';
import {sendMessageToMaster} from '@angular/compiler-cli/ngcc/src/execution/cluster/utils';
import {SendMessageComponent} from '../../dialogs/send-message/send-message.component';
import {MatDialog} from '@angular/material/dialog';
import {NoticeInfoService} from '../../_services/notice.info.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MailTo} from '../../shared/_models/MailTo';
import {SnackBar} from '../../shared/helpers/snackbar.helper';

@Component({
  selector: 'app-full-information',
  templateUrl: './full-information.component.html',
  styleUrls: ['./full-information.component.scss']
})
export class FullInformationComponent implements OnInit, OnDestroy {
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
  mailer = new MailTo('',
    '',
    '');
  noticeArray: Array<ResponseNotice>;
  noticeSubscription: Subscription;

  constructor(private noticeService: NoticeService,
              private dialog: MatDialog,
              private noticeInfoService: NoticeInfoService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private snackbar: SnackBar) {
    this.noticeSubscription = this.noticeInfoService.currentNotice.subscribe(response => {
        this.card = response;
        this.mailer.receiver = response.notice_author_email;
      });
  }

  ngOnInit(): void {
  }


  toFavourites(): void {

  }

  toSendMessage(): void {
    this.dialog.open(SendMessageComponent, {});
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

  toCreateNotice(): void {
    this.router.navigate(['create']);
  }

  ngOnDestroy(): void {
    this.noticeSubscription.unsubscribe();
  }

  sendEmail(): void {
    this.noticeService.emailSender(this.mailer);
    this.snackbar.open('Wiadomość wysłana pomyślnie!', 'X');
  }

  toNotices(): void {
    this.router.navigate(['profile']);
  }


}
