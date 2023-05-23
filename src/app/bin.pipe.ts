import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bin'
})
export class BinPipe implements PipeTransform {

  transform(value: any, find: string): any {
    // find contains the bin data
    if (!find || (find && find[0] == "")) {
      return;
    }
    let e = [];
    for (let bin of value) {
      if (bin.No == find) {
        e.push(bin);
      }
    }
    return e;
  }

}

  // else {
  //   return value.filter((e: any) => {
  //     return (e['No'].toLowerCase().indexOf(args[0].toLowerCase()) > -1);
  //   });
  // }
