import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SignInComponent} from './sign-in.component';
import {AuthenticationService} from '../../_services/authentication.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../../_services/user.service';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [RouterTestingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
      providers: [AuthenticationService, UserService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
