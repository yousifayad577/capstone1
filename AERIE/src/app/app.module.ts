import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { AboutGroupPageComponent } from './pages/about-group-page/about-group-page.component';
import { LoginRegistrationPageComponent } from './pages/login-registration-page/login-registration-page.component';
import { SurveysPageComponent } from './pages/surveys-page/surveys-page.component';
import { AboutAeriePageComponent } from './pages/about-aerie-page/about-aerie-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMePageComponent,
    AboutGroupPageComponent,
    LoginRegistrationPageComponent,
    SurveysPageComponent,
    AboutAeriePageComponent,
    SettingsPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
