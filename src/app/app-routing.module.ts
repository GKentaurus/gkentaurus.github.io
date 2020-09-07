import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'pericia', component: ExpertiseComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
