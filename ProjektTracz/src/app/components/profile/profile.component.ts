import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../shared/_models/User';
import {MatDialog} from '@angular/material/dialog';
import {NoticeService} from '../../_services/notice.service';
import {ResponseNotice} from '../../shared/_models/ResponseNotice';
import {NoticeInfoService} from '../../_services/notice.info.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userID: string;
  token: string;
  user: string;
  hide: true;
  profileUserModel = new User('', '', '', '');
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
  searchbar: string;


  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog,
              private noticeService: NoticeService,
              private noticeInfoService: NoticeInfoService) {
    this.user = localStorage.getItem('name');
    this.authenticationService.getUserInfo(this.profileUserModel);
    this.token = localStorage.getItem('token');

    this.authenticationService.userObservable.subscribe(
      user => {
        this.user = user.name;
        console.log(user.name);
      });
    this.noticeService.showAllNotices().toPromise()
      .then(res => {
        this.noticeArray = [];
        this.noticeArray = res['All_notices'];
        console.log(res['All_notices']);
      });
  }

  ngOnInit(): void {
    document.body.removeAttribute('.modal-open');
    if (this.searchbar) {

    }
  }

  logOut(): void {
    this.authenticationService.logOut();
    console.log('User Log out.');
  }

  toCreateNotice(): void {
    this.router.navigate(['create']);
  }

  toShowFullInformation(card: ResponseNotice): void {
    this.noticeInfoService.changeNotice(card);
    this.router.navigate(['info']);
  }

  search(): void {
  }
}
