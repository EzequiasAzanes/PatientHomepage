import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(list: any[], keyword:string): any {

    if(!list)
    {
      return [];
    }

    if(!keyword)
    {
      return list;
    }

    keyword = keyword.toLowerCase();
    return list.filter(index =>{

        if(index.name.fname.toLowerCase().includes( keyword ) || index.name.mname.toLowerCase().includes( keyword ) || index.name.lname.toLowerCase().includes( keyword ) )
        {
           return true; 
        }
     
      
    });
  }
}
