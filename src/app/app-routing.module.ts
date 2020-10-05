import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';

import { Err404Component } from './components/errors/err404/err404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animationState: 'One' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animationState: 'Two' }
  },
  {
    path: 'expertise',
    component: ExpertiseComponent,
    data: { animationState: 'Three' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animationState: 'Four' }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { animationState: 'Five' }
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animationState: 'Six' }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { animationState: 'Seven' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animationState: 'Eight' }
  },
  {
    path: '404',
    component: Err404Component,
    data: { animationState: 'Nine' }
  },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
