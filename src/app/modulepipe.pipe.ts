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
  else{
      // return value.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return value.filter((e: any) => {
        return (e['Code'].toLowerCase().includes(search.toLowerCase())) ||
        (e['Name'].toLowerCase().includes(search.toLowerCase()));
      });
    }
     
}
  }
