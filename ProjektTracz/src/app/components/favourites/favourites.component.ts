import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateNoticeComponent} from '../create-notice/create-notice.component';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(private router: Router,
              private dialog: MatDialog,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  toAllNotices(): void {
    this.router.navigate(['profile']);
  }

  toCreateNotice(): void {
    this.dialog.open(CreateNoticeComponent, {});
  }

  logOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['h']);
  }
}
