import { CurrentProjectComponent } from './exquisite-corpses/pages/current-project/current-project.component';
import { ArchiveComponent } from './exquisite-corpses/pages/archive/archive.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { HistoryComponent } from './exquisite-corpses/pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  },
  {
    path: 'current',
    component: CurrentProjectComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'texts',
    loadChildren: () => import('./exquisite-corpses/texts.module').then(m => m.TextsModule),
    canLoad: [ AuthGuard],
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
