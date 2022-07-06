import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeService } from './employee/employee.service';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeFilterPipePipe } from './employee-filter-pipe.pipe';
import { DepartementListComponent } from './departement-list/departement-list.component';
@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeListComponent,
    RegisterEmployeeComponent,
    EditEmployeeComponent,
    EmployeeFilterPipePipe,
    DepartementListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
