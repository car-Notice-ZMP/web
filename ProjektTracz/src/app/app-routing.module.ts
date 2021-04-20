import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SettingsComponent} from './components/settings/settings.component';
import {AuthGuardLogin} from './_services/auth-guard-login.service';

const routes: Routes = [
  {path: '', redirectTo: 'h', pathMatch: 'full'},
  {path: 'h', component: HomeComponent},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardLogin]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuardLogin]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent
];

