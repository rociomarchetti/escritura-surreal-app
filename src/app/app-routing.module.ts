import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { HistoryComponent } from './pages/history/history.component';
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
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'texts',
    loadChildren: () => import('./exquisite-corpses/texts.module').then(m => m.TextsModule),
    canLoad: [ AuthGuard],
    canActivate: [ AuthGuard ]
  }
  /* {
    path: '**',
    redirectTo: ''
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
