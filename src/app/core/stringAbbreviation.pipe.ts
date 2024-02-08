import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbr'
})

export class StringAbbreviationPipe implements PipeTransform {
  constructor() {}
  transform(value: string): string {
    let output = '';
    const array = value.split(' ');
    for(let i = 0; i < array.length; i++) {
      output += array[i][0];
    }
    return output;
  }
}
