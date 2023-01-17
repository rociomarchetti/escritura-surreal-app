import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs';

import { FinalText, Sentence } from './../../interfaces/texts.interface';

import { TextsService } from './../../services/texts.service';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  currentText: FinalText = {
    id: '',
    category: '',
    date: '',
    sentences: [],
  };

  newSentence: Sentence = {
    userId: '',
    sentence: '',
  };

  sentenceForm: FormGroup = this.fb.group({
    userSentence: ['', [Validators.required]],
  });

  lastSentence: string = '';

  saveSentence() {
    let newSentence = this.sentenceForm.value.userSentence;
    this.newSentence.sentence = newSentence;
    this.newSentence.userId = this.AuthService.loggedUserId;
    this.currentText.sentences.push(this.newSentence);
    this.TextsService.updateText(this.currentText).subscribe((text) =>
      console.log('Actualizando', text)
    );
    this.Router.navigate([''])
  }

  deleteText() {
    this.TextsService.deleteText(this.currentText.id).subscribe((resp) => {
      this.Router.navigate(['/archive']);
    });
  }

  ngOnInit(): void {
    this.ActivatedRoute.params
      .pipe(switchMap(({ id }) => this.TextsService.getTextById(id)))
      .subscribe((text) => {
        this.currentText = text;
        this.lastSentence =
          this.currentText.sentences[
            this.currentText.sentences.length - 1
          ].sentence;
      });
  }

  constructor(
    private fb: FormBuilder,
    private TextsService: TextsService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private AuthService: AuthService
  ) {}
}
