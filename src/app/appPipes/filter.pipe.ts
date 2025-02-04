import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})


export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    // Check if value is defined and not null. this is  the guard clause 
    if (!value || !searchTerm) {
      return value;
    }

    // Filter the array
    return value.filter(function(search) {
      return search.Product.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
