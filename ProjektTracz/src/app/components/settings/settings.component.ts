import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../shared/_models/User';
import {ColorSchemeService} from '../../_services/color-scheme.service';
import {UserSettingsService} from '../../_services/user.settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  socialLogin: any = localStorage.getItem('socialLogin');
  private profileUserModel = new User('', '', '', '');
  user = new User('', '', '', '');
  private checked: boolean;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private colorSchemeService: ColorSchemeService,
              private userSettingsService: UserSettingsService) {
    this.authenticationService.getUserInfo(this.profileUserModel);
    this.userSettingsService.userObservable.subscribe(
      user => {
        this.user = user;
      });
    this.checkSlideToggle();
    this.colorSchemeService.load();
    if (this.socialLogin === 'true') {
      this.socialLogin = false;
    }
  }

  checkSlideToggle(): void {
    if (localStorage.getItem('prefers-color') === 'dark') {
      this.checked = true;
    }
  }

  ngOnInit(): void {
  }

  setLight(): void {
    this.colorSchemeService.update('light');
  }

  setDark(): void {
    this.colorSchemeService.update('dark');
  }

  /*
  do tego jeszcze nie ma api
  changeEmail(user: any): void {
    this.userSettingsService.update(this.userID, user);
  }

  changeUsername(user: any): void {
    this.userSettingsService.update(this.userID, user);
  }

  deleteUser(): void {
    this.dialog.open(DeleteAccountComponent, {});
  }
  */
}
