import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement';
import { Employee } from '../employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  employee = new Employee();
  showAlert=false;
  dep =new Departement();
  dep1:Departement[];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
   

       this.employeeService.getAllDepartement().subscribe((response:any)=>{
        this.dep.description=response
      });
  
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe((response)=>{
      console.log(response);
      this.employee = new Employee();
      this.showAlert=true;
    });

  }
  closeAlert(){
    this.showAlert=false;
  }

}
