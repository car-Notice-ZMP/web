import {Component} from '@angular/core';
import {AuthenticationService} from './_services/authentication.service';
import {Router} from '@angular/router';
import {Login} from './_models/Login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjektTracz';
  currentUser: Login;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
}
