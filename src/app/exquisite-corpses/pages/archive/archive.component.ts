import { AuthService } from './../../../auth/services/auth.service';
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
  filteredTextsList: FinalText[] = [];
  filter: boolean = false;

  filterPresent() {
    this.filter = true;
    this.filteredTextsList = this.finalTextsList.filter(
      (a) => a.category === 'Presente'
    );
    return this.filteredTextsList;
  }

  filterPast() {
    this.filter = true;
    this.filteredTextsList = this.finalTextsList.filter(
      (a) => a.category === 'Pasado'
    );
    return this.filteredTextsList
  }

  filterFuture() {
    this.filter = true;
    this.filteredTextsList = this.finalTextsList.filter(
      (a) => a.category === 'Futuro'
    );
    return this.filteredTextsList
  }

  deleteFilter() {
    return this.filter = false;
  }

  get adminSession() {
    return this.AuthService.adminSession
  }

  deleteText(id:string) {
    console.log(id)
  }

  ngOnInit(): void {
    this.TextsService.getTexts().subscribe((texts) =>
      texts.forEach((element) => {
        if (element.sentences.length === 4) {
          this.finalTextsList.push(element);
        }
        return this.finalTextsList;
      })
    );
  }

  constructor(private TextsService: TextsService, private AuthService: AuthService) {}
}
