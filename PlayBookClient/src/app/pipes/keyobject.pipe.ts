import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyobject'
})
export class KeyobjectPipe implements PipeTransform {

  transform(value, args:string[]):any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }

}
