import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'employeeFilterPipe'
})
export class EmployeeFilterPipePipe implements PipeTransform {

  transform(list: Employee[],searchText:string): any{
    if(!list){
    return [];
  }

  if(!searchText){
    return list;
  }
  searchText=searchText.toLocaleLowerCase();
  list = list.filter(s=>{
    return s.nom.toLocaleLowerCase().includes(searchText);

  });
  return list;
  }

}
