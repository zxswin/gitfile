import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { AuthGuard }                from '../auth-guard.service';
const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent ,canActivate: [AuthGuard],},
  { path: 'hero/:id', component: HeroDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }