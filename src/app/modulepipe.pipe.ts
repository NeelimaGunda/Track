import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modulepipe'
})
export class ModulepipePipe implements PipeTransform {

  transform(value: any,search: string): any {
    // value contains the submodules data
    if (!search || (search && search[0] == "")) {
      console.log(value);
      return value;
    }
    let e = [];
    for (let list of value) {
      if (list.Code.toLowerCase() == search) {
        e.push(list);
      }
    }
    return e;
  }
}
