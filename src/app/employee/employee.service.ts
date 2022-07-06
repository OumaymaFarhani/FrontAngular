import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  createEmployee(employee:Employee){
    return this.http.post(this.baseUrl+ "/employees",employee);
  }
  updateEmployee(employee:Employee){
    return this.http.put(this.baseUrl+"/employees",employee);
  }
  getAllEmployee(){
    return this.http.get(this.baseUrl+"/employees/allEmployees");
  }
  getEmployee(id: number){
    return this.http.get<Employee>(this.baseUrl+"/employees/" +id);
  }
  deleteEmployee(id: number){
    return this.http.delete(this.baseUrl+"/employees/" +id);
  }
  
  getAllDepartement(){
    return this.http.get(this.baseUrl+"/departements");
  }
}
