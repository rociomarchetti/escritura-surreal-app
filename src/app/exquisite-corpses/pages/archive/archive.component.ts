import { Component, OnInit } from '@angular/core';

import { FinalText, Sentence } from './../../interfaces/texts.interface';
import { AuthService } from './../../../auth/services/auth.service';
import { TextsService } from './../../services/texts.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  finalTextsList: FinalText[] = [];
  filteredTextsList: FinalText[] = [];
  filter: boolean = false;
  filterStyle: number = 0;

  filterPresent() {
    this.filter = true;
    this.filterStyle = 1;
    this.filteredTextsList = this.finalTextsList.filter(
      (a) => a.category === 'Presente'
    );
    return this.filteredTextsList;
  }

  filterPast() {
    this.filter = true;
    this.filterStyle = 2;
    this.filteredTextsList = this.finalTextsList.filter(
      (a) => a.category === 'Pasado'
    );
    return this.filteredTextsList;
  }

  filterFuture() {
    this.filter = true;
    this.filterStyle = 3;
    this.filteredTextsList = this.finalTextsList.filter(
      (a) => a.category === 'Futuro'
    );
    return this.filteredTextsList;
  }

  deleteFilter() {
    this.filterStyle = 0;
    return (this.filter = false);
  }

  get adminSession() {
    return this.AuthService.adminSession;
  }

  deleteText(id: string) {
    this.TextsService.deleteText(id).subscribe((resp) => console.log(resp));
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

  constructor(
    private TextsService: TextsService,
    private AuthService: AuthService
  ) {}
}
