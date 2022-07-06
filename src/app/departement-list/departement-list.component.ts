import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement';
import { DepartementService } from '../departement/departement.service';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

  constructor(private departmentService: DepartementService) { }
departements :Departement[];
  ngOnInit(): void {
    this.departmentService.getAllDepartement().subscribe((response:any)=>{
      this.departements=response
    });

}

deleteDepartement(idDepartement:number) {
  this.departmentService. deleteDepartement(idDepartement).subscribe((response) => {
    console.log(response);
    this.departements = this.departements.filter(d => {
      return d.idDepartement !=idDepartement;
    });
  });
}


}
