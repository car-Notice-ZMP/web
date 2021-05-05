import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../shared/_models/User';
import {MatDialog} from '@angular/material/dialog';
import {CreateNoticeComponent} from '../../dialogs/create-notice/create-notice.component';
import {UserSettingsService} from '../../_services/user.settings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userID: string;
  token: string;
  user: string;
  profileUserModel = new User('', '', '', '');

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog) {
    this.user = localStorage.getItem('name');
    this.authenticationService.getUserInfo(this.profileUserModel);
    this.token = localStorage.getItem('token');
    this.authenticationService.userObservable.subscribe(
      user => {
        this.user = user.name;
      });
  }

  ngOnInit(): void{
    document.body.removeAttribute('.modal-open');
  }

  logOut(): void {
    this.authenticationService.logOut();
    console.log('User Log out.');
  }

  toSettings(): void {
    this.router.navigate(['s']);
  }

  toCreateNotice(): void {
    this.dialog.open(CreateNoticeComponent, {});
  }


}
