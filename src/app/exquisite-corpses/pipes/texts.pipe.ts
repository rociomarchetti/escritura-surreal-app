import { Pipe, PipeTransform } from '@angular/core';
import { Sentence } from './../interfaces/texts.interface';

@Pipe({
  name: 'texts',
})
export class TextsPipe implements PipeTransform {

  transform(value: Sentence[]): string {
    let sentencesArray: string[] = [];
    value.forEach(element => {
        sentencesArray.push(element.sentence)
    });
    return sentencesArray.join(' ')
  }
}
