import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLeftComponent } from './components/shared/navbar-left/navbarLeft.component';
import { NavbarTopComponent } from './components/shared/navbar-top/navbarTop.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLeftComponent,
    NavbarTopComponent,
    HomeComponent,
    ProfileComponent,
    ExpertiseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
