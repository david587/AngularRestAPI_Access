import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-munkas',
  templateUrl: './munkas.component.html',
  styleUrls: ['./munkas.component.scss']
})
export class MunkasComponent implements OnInit {
  employees !: any;


  //api az tetszöleges név
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.api.getEmployees().subscribe({
      //data változóba kapjuk az adatokat, tipust zárójelbe tesszük
      next: (data: any) => {
        this.employees = data;
      },
      error: (err:any)=> {
        console.log("hiba a rest api lekérés sikertelen!");
      }
    });
  }
}
