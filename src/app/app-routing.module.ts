import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animationState: 'One' }
  },
  {
    path: 'perfil',
    component: ProfileComponent,
    data: { animationState: 'Two' }
  },
  {
    path: 'pericia',
    component: ExpertiseComponent,
    data: { animationState: 'Three' }
  },
  {
    path: 'habilidades',
    component: SkillsComponent,
    data: { animationState: 'Four' }
  },
  {
    path: 'experiencia',
    component: ExperienceComponent,
    data: { animationState: 'Five' }
  },
  {
    path: 'educacion',
    component: EducationComponent,
    data: { animationState: 'Six' }
  },
  {
    path: 'contacto',
    component: ContactComponent,
    data: { animationState: 'Seven' }
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
