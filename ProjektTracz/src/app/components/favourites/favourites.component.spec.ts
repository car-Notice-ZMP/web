import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesComponent } from './favourites.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from '../../_services/authentication.service';
import {UserService} from '../../_services/user.service';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouritesComponent],
      imports: [RouterTestingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
      providers: [AuthenticationService, UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
