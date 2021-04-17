import {Component, OnInit} from '@angular/core';
import {SocialUser} from 'angularx-social-login';
import {SocialService} from '../../_services/social.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

export class GoogleComponent implements OnInit {
  user: SocialUser;

  constructor(private socialService: SocialService,
              private router: Router) {
  }

  async signInWithGoogle(): Promise<void> {
    await this.socialService.signInWithGoogle();
  }

  ngOnInit(): void {
  }
}
