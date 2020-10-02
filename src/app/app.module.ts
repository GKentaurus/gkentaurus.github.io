import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLeftComponent } from './components/shared/navbar-left/navbarLeft.component';
import { NavbarTopComponent } from './components/shared/navbar-top/navbarTop.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
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
  imports: [BrowserModule, AppRoutingModule],
  providers: [MenuOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
