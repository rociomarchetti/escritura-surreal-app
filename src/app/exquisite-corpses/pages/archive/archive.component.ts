import { FinalText, Sentence } from './../../interfaces/texts.interface';

import { TextsService } from './../../services/texts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  finalTextsList: FinalText[] = [];


  ngOnInit(): void {
    this.TextsService.getTexts().subscribe((texts) => 
    texts.forEach((element) => {
      if (element.sentences.length === 4) {
        this.finalTextsList.push(element)
      }
      return this.finalTextsList
    }));

  }

  constructor(private TextsService: TextsService) {
  
  }
}
