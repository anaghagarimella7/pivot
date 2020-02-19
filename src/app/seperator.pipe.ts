import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seperator'
})
export class SeperatorPipe implements PipeTransform {

  transform(value:number, seperator:string) {
    if(seperator==','){
      return value.toLocaleString('en',{useGrouping:true});
    }
    else{
      return value.toLocaleString('en',{useGrouping:false});
    }
  }

}
