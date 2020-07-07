import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name: 'format'
})
export class format implements PipeTransform{
   transform(value: number, formatAsPercent: string){
       if(formatAsPercent=='true'){
       return value.toLocaleString('en-US',{style:'percent'});
       }
       else
       {
           return value;
       }
   }
}