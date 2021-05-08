import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../shared/_models/User';
import {MatDialog} from '@angular/material/dialog';
import {NoticeService} from '../../_services/notice.service';
import {ResponseNotice} from '../../shared/_models/ResponseNotice';
import {FullInformationComponent} from '../full-information/full-information.component';
import {Searchable} from '../../shared/_models/Searchable';
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
  searchbar = new Searchable('',
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
    '',
    '',
    '',
    '',
    '');


  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog,
              private noticeService: NoticeService,
              private noticeInfoService: NoticeInfoService) {
    this.user = localStorage.getItem('name');
    this.authenticationService.getUserInfo(this.profileUserModel);
    this.token = localStorage.getItem('token');
    this.noticeService.showAllNotices().toPromise()
      .then(response => {
        this.noticeArray = [];
        this.noticeArray = response['All_notices'];
      });
    this.authenticationService.userObservable.subscribe(
      user => {
        this.user = user.name;
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
    console.log(card);
    this.router.navigate(['info']);
  }

  toFavourites(): void {
    this.router.navigate(['fav']);
  }

  search(): void {

  }


  addToFavourites(id: string): void {

  }
}
