import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private router:Router,private employeeService : EmployeeService) { }
  id: number;
  //employee = new Employee();
employee: Employee;
  ngOnInit(): void {


   // this.id = this.route.snapshot.params.id;
    //this.employeeService.getEmployee(this.id).subscribe((response) => {
    //  this.employee=response.data;

   // })

   this.route.paramMap.subscribe(
    d=>{
      let id =Number(d.get('id'));
      this.employeeService.getEmployee(id).subscribe(
        d=>{
          this.employee=d;
        }
      )  
    }
  )

}


save(){
  this.employeeService.updateEmployee(this.employee).subscribe(
    d=>{
      this.router.navigate(['employee-list'])
    }
  )


}

}
