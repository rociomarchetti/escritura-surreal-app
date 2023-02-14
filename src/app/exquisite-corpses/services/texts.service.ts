import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/videos.interface';

import { FinalText } from './../interfaces/texts.interface';

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

  deleteText(id: string): Observable<FinalText> {
    return this.http.delete<FinalText>(`http://localhost:3000/text/${id}`);
  }

  /* API VIDEOS PEXELS.COM */

  key: string = 'fJq9oul5bm8XpDbeKmOtIVXEJYORzFQ2tbsOtYn1OtPiMDKsxFb2BrdV';

  collectionId: string = 'dh1vvdb';

  getVideo(): Observable<any> {
    return this.http.get<any>(
      `https://api.pexels.com/v1/collections/${this.collectionId}`,
      {
        headers: {
          Authorization: this.key,
        },
      }
    );
  }

  constructor(private http: HttpClient) {}
}
