import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) {
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
