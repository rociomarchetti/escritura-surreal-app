import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from './pages/text/text.component';

import { CreateProjectComponent } from './pages/create-project/create-project.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateProjectComponent
      },
      {
        path: 'edit/:id',
        component: TextComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TextsRoutingModule { }
