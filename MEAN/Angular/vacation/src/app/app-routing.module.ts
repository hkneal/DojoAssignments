import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigIslandComponent } from './big-island/big-island.component';
import { MainIslandComponent } from './main-island/main-island.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'main', pathMatch: 'full', component: MainIslandComponent},
  { path: 'big', pathMatch: 'full', component: BigIslandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
