import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';

const routes: Routes = [
  {
    path:"employee-list",
    component: EmployeeListComponent
  },
  {
    path:"departement-list",
    component: DepartementListComponent
  },
  {
    path:"register-employee",
    component: RegisterEmployeeComponent
  },
  {
    path:"edit-employee/:id",
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
