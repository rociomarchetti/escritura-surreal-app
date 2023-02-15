import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { FinalText, Sentence } from './../../interfaces/texts.interface';

import { AuthService } from './../../../auth/services/auth.service';
import { TextsService } from './../../services/texts.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent {
  newTextForm: FormGroup = this.fb.group({
    newTextSentence: ['', [Validators.required, Validators.minLength(15)]],
    newTextCategory: ['', [Validators.required]],
  });

  text: FinalText = {
    id: '',
    category: '',
    date: '',
    sentences: [
    ],
  };

  newSentence: Sentence = {
    userId: '',
    sentence: '',
  }

  saveText() {
    let firstSentence = this.newTextForm.value.newTextSentence;
    this.newSentence.sentence = firstSentence;
    this.newSentence.userId = this.AuthService.loggedUserId;
    this.text.sentences.push(this.newSentence);
    this.text.category = this.newTextForm.value.newTextCategory;
    this.text.date = this.TextsService.today;
    this.TextsService.saveText(this.text).subscribe((resp) =>
      console.log(resp)
    );
    this.router.navigate(['current']);
  }

  invalid(field: string) {
    return (
      this.newTextForm.get(field)?.invalid && this.newTextForm.get(field)?.touched
    );
  }

  constructor(private fb: FormBuilder, private TextsService: TextsService, private AuthService: AuthService, private router: Router) {}
}
