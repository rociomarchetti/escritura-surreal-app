
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TextsRoutingModule } from './texts-routing.module';

import { ArchiveComponent } from './pages/archive/archive.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { CurrentProjectComponent } from './pages/current-project/current-project.component';
import { TextComponent } from './pages/text/text.component';
import { HistoryComponent } from './pages/history/history.component';


import { TextsPipe } from './pipes/texts.pipe';
import { WordsPipe } from './pipes/words.pipe';


@NgModule({
  declarations: [
    ArchiveComponent,
    CreateProjectComponent,
    CurrentProjectComponent,
    WordsPipe,
    TextsPipe,
    TextComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    TextsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TextsModule { }
