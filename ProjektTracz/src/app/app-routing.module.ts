import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './_helpers/auth.guard';
import {CreateNoticeComponent} from './components/create-notice/create-notice.component';
import {FullInformationComponent} from './components/full-information/full-information.component';

const routes: Routes = [
  {path: '', redirectTo: 'h', pathMatch: 'full'},
  {path: 'h', component: HomeComponent},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreateNoticeComponent, canActivate: [AuthGuard]},
  {path: 'info', component: FullInformationComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent,
];

