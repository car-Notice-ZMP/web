import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleComponent } from './google.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from '../../_services/authentication.service';
import {UserService} from '../../_services/user.service';
import {SocialService} from '../../_services/social.service';

describe('GoogleComponent', () => {
  let component: GoogleComponent;
  let fixture: ComponentFixture<GoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleComponent],
      imports: [RouterTestingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
      providers: [AuthenticationService, UserService, SocialService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
