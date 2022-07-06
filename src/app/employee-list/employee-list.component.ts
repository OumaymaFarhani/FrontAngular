import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

 
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((response:any)=>{
      this.employees=response
    });

    
  }
  deleteEmployee(id:number) {
    this.employeeService.deleteEmployee(id).subscribe((response) => {
      console.log(response);
      this.employees = this.employees.filter(e => {
        return e.id != id;
      });
    });
  }



}
