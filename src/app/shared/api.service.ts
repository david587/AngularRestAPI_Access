import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = "http://localhost:3000";
  //globálisan injektálja
  constructor(private http: HttpClient) { }

  //restapit megszerezzük
  getEmployees():any{
    let endpoint = "employees";
    let url = this.host + "/" + endpoint;
    //meghivjuka  https clientet,térjen vissza ezzel
    return this.http.get<any>(url)
  }
}
