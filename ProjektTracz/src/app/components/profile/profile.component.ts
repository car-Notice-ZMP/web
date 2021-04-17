import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../../_services/color-scheme.service';
import {UserSettingsService} from '../../_services/user.settings.service';
import {SocialService} from '../../_services/social.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  userID: string;
  user: string;
  private settingsSubscribe: Subscription;
  checked = false;

  constructor(
    private socialService: SocialService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private colorSchemeService: ColorSchemeService,
    private userSettingsService: UserSettingsService) {
    this.checkSlideToggle();
    this.colorSchemeService.load();
    this.user = localStorage.getItem('userID');
    localStorage.setItem('refreshed', 'false');
    this.userSettingsService.get(this.userID);
    this.settingsSubscribe = this.userSettingsService.userObservable.subscribe(
      user => {
        this.user = user.username;
      });
  }

  checkSlideToggle(): void {
    if (localStorage.getItem('prefers-color') === 'dark') {
      this.checked = true;
    }
  }

  setTheme(): void {
    if (localStorage.getItem('prefers-color') === 'light') {
      this.colorSchemeService.update('dark');
    } else {
      this.colorSchemeService.update('light');
    }
  }

  ngOnInit(): void {
    document.body.removeAttribute('.modal-open');
    this.user = localStorage.getItem('username');
  }

  ngOnDestroy(): void {
    this.settingsSubscribe.unsubscribe();
  }

  logOut(): void {
    this.authenticationService.logOut();
    console.log('User Log out.');
  }

  toSettings(): void {
    this.router.navigate(['s']);
  }
}
