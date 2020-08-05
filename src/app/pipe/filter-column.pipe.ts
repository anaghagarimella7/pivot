import { filter } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColumn',
  pure:false
})
export class FilterColumnPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value != null)
    {
     // console.log(value);
      return value.filter(data=>  data.checked);
    }
    return null;
  }

}
