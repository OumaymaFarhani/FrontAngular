import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  deleteDepartement(idDepartement: number){
    return this.http.delete(this.baseUrl+"/departements/" +idDepartement);
  }

  getAllDepartement(){
    return this.http.get(this.baseUrl+"/departements");
  }
}
