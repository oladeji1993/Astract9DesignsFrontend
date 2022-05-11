import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  baseUrl = environment.serverUrl;

  constructor(
    private http : HttpClient,
  ) { }


  createComplaint(context:any){
    return this.http.post(`${this.baseUrl}/complaint/create`, context);
  };

  getComplaints(){
    return this.http.get(`${this.baseUrl}/complaint/fetch`);
  };

  updateComplaints(id:any, context:any){
    return this.http.put(`${this.baseUrl}/complaint/`+ id, context);

  };
}
