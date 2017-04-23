import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyobject'
})
export class KeyobjectPipe implements PipeTransform {

  transform(value, args:string[]):any {
    let keys = [];
    for (let key in value) {
      let index = +key;
      keys.push({key: index, value: value[index]});
    }
    return keys;
  }

}
