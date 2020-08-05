import { filter } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchitems',
  pure:false
})
export class SearchPipe implements PipeTransform {
  transform(items: any, columns, filtervalue): any {
    // console.log(columns);
    if (items != null && items != undefined && items.length > 0) {
      return items.filter( data => {
        let check = false;
        let fcheck=true;
        for (let i = 0; i < columns.length; i++) {
          //search
          if(columns[i]['checked'])
          {
          let name = columns[i]['name'];
          if (data[name] != null) {
            let value = data[name].toString();
            if (value.toLowerCase().includes(filtervalue.toLowerCase())) {
              check = true;
            }
          }
          //filter
          const filterStatus = columns[i]['filter'].status;
          if (filterStatus) {
            const filteroption = columns[i]['filter']['option'];
            const filtervalue = columns[i]['filter']['value'];
            fcheck = this.filterCheck(filteroption , filtervalue , data[name]);
            if(fcheck==false){
              break;
            }
          }
        }
      }
      return check && fcheck;
      });
    }
    return null;
  }

  filterCheck(option, value,item):boolean {
    if(item==null || item==undefined)
    {
      return false;
    }
    switch (option) {
      case 'Equal':
        if(value==item)
        {
          return true
        }
        break;
      case 'Not equal':
        if(value!=item)
        {
          return true;
        }
        break;
      case 'Less':
        if(item<value)
        {
          return true;
        }
        break;
      case 'Greater':
        if(item>value)
        {
          return true;
        }
        break;
      case 'Less or Equal':
        if(item<=value)
        {
          return true;
        }
        break;
      case 'Greater or equal':
        if(item>=value)
        {
          return true;
        }
        break;
      case 'Begin':
        if(item.startsWith(value))
        {
          return true;
        }
        break;
      case 'Not Begin':
        if(!item.startsWith(value))
        {
          return true;
        }
        break;
    }
    return false;
  }

}
