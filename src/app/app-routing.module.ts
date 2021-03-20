import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';

import { Err404Component } from './components/errors/err404/err404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animationState: 'home' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animationState: 'profile' }
  },
  {
    path: 'expertise',
    component: ExpertiseComponent,
    data: { animationState: 'expertise' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animationState: 'skills' }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { animationState: 'experience' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animationState: 'portfolio' }
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animationState: 'education' }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { animationState: 'courses' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animationState: 'contact' }
  },
  {
    path: '404',
    component: Err404Component,
    data: { animationState: 'Nine' }
  },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top',
    relativeLinkResolution: 'corrected'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
