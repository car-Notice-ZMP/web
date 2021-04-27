import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../shared/_models/User';
import {UserService} from '../../_services/user.service';

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
              private userService: UserService) {
    this.user = localStorage.getItem('name');
    this.authenticationService.getUserInfo(this.profileUserModel);
    this.token = localStorage.getItem('token');
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

}
