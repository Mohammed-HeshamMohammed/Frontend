import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceDescription'
})
export class SliceDescriptionPipe implements PipeTransform {
  transform(value: string, limit: number = 30): string {
    if (value.length <= limit) {
      return value;
    }
    return value.slice(0, limit) + '...';
  }
}
