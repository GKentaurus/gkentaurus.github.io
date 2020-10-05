import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLeftComponent } from './components/shared/navbar-left/navbarLeft.component';
import { NavbarTopComponent } from './components/shared/navbar-top/navbarTop.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuOptionsService } from './services/menu-options.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLeftComponent,
    NavbarTopComponent,
    HomeComponent,
    ProfileComponent,
    ExpertiseComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [MenuOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
