import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthenticationService} from './_services/authentication.service';
import {Login} from './shared/_models/Login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjektTracz';
  currentUser: Login;

  constructor(
    private changeDetector: ChangeDetectorRef,
    public authenticationService: AuthenticationService,

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }
}
