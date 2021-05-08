import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
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
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { CreateNoticeComponent } from './components/create-notice/create-notice.component';
import { FullInformationComponent } from './components/full-information/full-information.component';
import {SnackBar} from './shared/helpers/snackbar.helper';
import { FavouritesComponent } from './components/favourites/favourites.component';

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
    FavouritesComponent,
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
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    UserService,
    SnackBar,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [{
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('https://citygame.ga/api/google')
        },
        ]
      } as SocialAuthServiceConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
