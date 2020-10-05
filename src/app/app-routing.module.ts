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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
