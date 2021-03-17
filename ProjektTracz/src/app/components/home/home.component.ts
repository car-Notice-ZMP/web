import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../../_services/color-scheme.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checked = false;

  constructor(private authenticationService: AuthenticationService,
              public router: Router,
              private colorSchemeService: ColorSchemeService) {
    this.checkSlideToggle();
    this.colorSchemeService.load();
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

  openSignIn(): void {
    this.router.navigate(['login']);
  }

  openSignUp(): void {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }

}
