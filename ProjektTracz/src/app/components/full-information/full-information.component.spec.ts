import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullInformationComponent } from './full-information.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from '../../_services/authentication.service';
import {UserService} from '../../_services/user.service';

describe('FullInformationComponent', () => {
  let component: FullInformationComponent;
  let fixture: ComponentFixture<FullInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullInformationComponent],
      imports: [RouterTestingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
      providers: [AuthenticationService, UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
