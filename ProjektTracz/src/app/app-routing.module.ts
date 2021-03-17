import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FacebookComponent} from './components/facebook/facebook.component';

const routes: Routes = [
  {path: '', redirectTo: 'h', pathMatch: 'full'},
  {path: 'h', component: HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  FacebookComponent
];

