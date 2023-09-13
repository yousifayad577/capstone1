import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SurveysPageComponent } from './pages/surveys-page/surveys-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AboutAeriePageComponent} from './pages/about-aerie-page/about-aerie-page.component';
import { AboutMePageComponent} from './pages/about-me-page/about-me-page.component';
import { AboutGroupPageComponent} from './pages/about-group-page/about-group-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-me-page', component: AboutMePageComponent },
  { path: 'about-group-page', component: AboutGroupPageComponent },
  { path: 'about-aerie-page', component: AboutAeriePageComponent },
  { path: 'settings-page', component: SettingsPageComponent },
  { path: 'surveys-page', component: SurveysPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
