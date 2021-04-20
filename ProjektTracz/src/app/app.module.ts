import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './_services/authentication.service';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import {SharedModule} from './shared/shared.module';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthGuardLogin} from './_services/auth-guard-login.service';
import {AuthGuardAdmin} from './_services/auth-guard-admin.service';
import {NoticeService} from './_services/notice.service';
import {UserService} from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string => localStorage.getItem('token'),
        // allowedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthenticationService,
    AuthGuardLogin,
    AuthGuardAdmin,
    NoticeService,
    UserService,
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
