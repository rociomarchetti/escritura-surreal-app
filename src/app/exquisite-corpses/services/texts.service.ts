import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FinalText } from './../interfaces/texts.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextsService {

  date = require('moment');
  today = this.date().format('MMMM Do YYYY');

  getTexts(): Observable<FinalText[]> {
    return this.http.get<FinalText[]>('http://localhost:3000/text');
  }

  getTextById(id: string): Observable<FinalText> {
    return this.http.get<FinalText>(`http://localhost:3000/text/${id}`);
  }

  saveText(text: FinalText): Observable<FinalText> {
    return this.http.post<FinalText>(`http://localhost:3000/text`, text);
  }

  updateText(text: FinalText): Observable<FinalText> {
    return this.http.put<FinalText>(
      `http://localhost:3000/text/${text.id}`,
      text
    );
  }

  deleteText(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/text/${id}`);
  }

  constructor(private http: HttpClient) {}
}
