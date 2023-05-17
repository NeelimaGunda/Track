import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'submodulefilter'
})
export class SubmodulefilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!args || (args && args[0] == "")) {
      return value;
    } else {
      return value.filter((e: any) => {
        return (e['No'].toLowerCase().indexOf(args[0].toLowerCase()) > -1) ||
          (e['ZoneCode'].toLowerCase().indexOf(args[0].toLowerCase()) > -1);
      });
    }
  }

}
