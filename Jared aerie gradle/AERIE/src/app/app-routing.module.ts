import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutAeriePageComponent } from './pages/about-aerie-page/about-aerie-page.component';
import { AboutGroupPageComponent } from './pages/about-group-page/about-group-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginRegistrationPageComponent } from './pages/login-registration-page/login-registration-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SurveysPageComponent } from './pages/surveys-page/surveys-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'about-me-page', component: AboutMePageComponent },
  { path: 'about-group-page', component: AboutGroupPageComponent },
  { path: 'about-aerie-page', component: AboutAeriePageComponent },
  { path: 'settings-page', component: SettingsPageComponent },
  { path: 'surveys-page', component: SurveysPageComponent },
  { path: 'login', component: LoginRegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
