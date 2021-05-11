import {Component} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {NoticeService} from '../../_services/notice.service';
import {ResponseNotice} from '../../shared/_models/ResponseNotice';
import {NoticeInfoService} from '../../_services/notice.info.service';
import {UserService} from '../../_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userID: string;
  token: string;
  user: string;
  hide: true;
  card = new ResponseNotice('',
    '',
    '',
    null,
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
  searchbar: string;


  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog,
              private noticeService: NoticeService,
              private noticeInfoService: NoticeInfoService,
              private userService: UserService) {
    this.user = localStorage.getItem('name');
    this.authenticationService.getUserInfo();

    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.userService.getUser();
    this.authenticationService.userObservable.subscribe(
      user => {
        this.user = user.name;
      });
    this.showAllNotices();


  }

  async showAllNotices(): Promise<void> {
    await this.noticeService.showAllNotices().toPromise()
      .then(res => {
        this.noticeArray = [];
        this.noticeArray = res['All_notices'];
      });
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

  toCreateNotice(): void {
    this.router.navigate(['create']);
  }

  toShowFullInformation(card: ResponseNotice): void {
    this.noticeInfoService.changeNotice(card);
    this.router.navigate(['info']);
  }
}
