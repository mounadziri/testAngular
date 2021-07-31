import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[],searchText: any): any[] {
    if(searchText)
    {
      // filter array
      return array.filter (
        (post) => {
          return  post?.postName?.toLowerCase().includes( searchText.toLowerCase()) 
          || post?.postdesc?.toLowerCase().includes( searchText.toLowerCase())
        }
      ) 
    }else{
      return array;
    }
     
  }

}
