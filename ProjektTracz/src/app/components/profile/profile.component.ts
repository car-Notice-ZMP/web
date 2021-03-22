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

  constructor(
    private socialService: SocialService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private colorSchemeService: ColorSchemeService,
    private userSettingsService: UserSettingsService) {
    this.user = localStorage.getItem('userID');
    localStorage.setItem('refreshed', 'false');
    colorSchemeService.load();
    this.userSettingsService.get(this.userID);
    this.settingsSubscribe = this.userSettingsService.userObservable.subscribe(
      user => {
        this.user = user.username;
      });
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

  toHistoryAndStatistics(): void {
    this.router.navigate(['hns']);
  }
}
