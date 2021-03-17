import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ColorSchemeService} from '../../_services/color-scheme.service';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checked = false;

  constructor(private authenticationService: AuthenticationService,
              public dialog: MatDialog,
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


  ngOnInit(): void {
  }

}
