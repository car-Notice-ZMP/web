import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../../_services/color-scheme.service';
import {UserSettingsService} from '../../_services/user.settings.service';
import {Subscription} from 'rxjs';
import {UserService} from '../../_services/user.service';
import {User} from '../../shared/_models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  userID: string;
  user: string;
  private settingsSubscribe: Subscription;
  profileUserModel = new User('', '', '', '');

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private colorSchemeService: ColorSchemeService,
              private userSettingsService: UserSettingsService,
              private userService: UserService) {
    this.colorSchemeService.load();
    this.user = localStorage.getItem('userID');
    localStorage.setItem('refreshed', 'false');
    this.userService.getUser();
    this.authenticationService.getUserInfo(this.profileUserModel);
  }

  ngOnInit(): void {
    document.body.removeAttribute('.modal-open');
    this.user = localStorage.getItem('username');
  }

  ngOnDestroy(): void {
    this.settingsSubscribe.unsubscribe();
  }

  toCreateGame(): void {
    this.router.navigate(['gc']);
  }

  toCategoriesManagement(): void {
    this.router.navigate(['cm']);
  }

  logOut(): void {
    this.authenticationService.logOut();
    console.log('User Log out.');
  }

  toSettings(): void {
    this.router.navigate(['s']);
  }


}
