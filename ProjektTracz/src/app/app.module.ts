import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './_services/authentication.service';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ProfileComponent} from './components/profile/profile.component';
import {UserService} from './_services/user.service';
import {AuthGuard} from './_helpers/auth.guard';
import {GoogleComponent} from './components/google/google.component';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {CreateNoticeComponent} from './components/create-notice/create-notice.component';
import {FullInformationComponent} from './components/full-information/full-information.component';
import {SnackBar} from './_helpers/snackbar.helper';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    GoogleComponent,
    CreateNoticeComponent,
    FullInformationComponent,
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
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    UserService,
    SnackBar,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '330533625286-5673scc40rk9b1osng7un882f14bj3o1.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
