import { TextsPipe } from './pipes/texts.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TextsRoutingModule } from './texts-routing.module';

import { ArchiveComponent } from './pages/archive/archive.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { CurrentProjectComponent } from './pages/current-project/current-project.component';
import { InspirationComponent } from './pages/inspiration/inspiration.component';
import { TextComponent } from './pages/text/text.component';

import { WordsPipe } from './pipes/words.pipe';


@NgModule({
  declarations: [
    ArchiveComponent,
    CreateProjectComponent,
    CurrentProjectComponent,
    InspirationComponent,
    WordsPipe,
    TextsPipe,
    TextComponent
  ],
  imports: [
    CommonModule,
    TextsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TextsModule { }
