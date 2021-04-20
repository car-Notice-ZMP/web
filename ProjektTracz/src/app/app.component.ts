import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthenticationService} from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjektTracz';

  constructor(
    private changeDetector: ChangeDetectorRef,
    public authenticationService: AuthenticationService
  ) {
  }
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }
}
