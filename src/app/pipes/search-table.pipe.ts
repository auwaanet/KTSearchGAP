import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtable'
})
@Injectable()

export class SearchTablePipe implements PipeTransform {
  transform(items: any[], field: string, value: string,filterMetadata:any): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      filterMetadata.count = items.length;
      return items;
    }
    let filteredItems = items.filter((singleItem) =>
    singleItem['farmername'].includes(value)||singleItem['Plantname'].includes(value)||singleItem['province'].includes(value)
    );
    filterMetadata.count = filteredItems.length;
    return  filteredItems
  }
}

