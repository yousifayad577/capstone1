import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { AboutGroupPageComponent } from './about-group-page/about-group-page.component';
import { LoginRegistrationPageComponent } from './login-registration-page/login-registration-page.component';
import { SurveysPageComponent } from './surveys-page/surveys-page.component';
import { AboutAeriePageComponent } from './about-aerie-page/about-aerie-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMePageComponent,
    AboutGroupPageComponent,
    LoginRegistrationPageComponent,
    SurveysPageComponent,
    AboutAeriePageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
