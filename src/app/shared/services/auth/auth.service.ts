import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.serverUrl;

  token: any
  user: any

  constructor(
    private http : HttpClient,
  ) { }


  loginUser(user:any){
    return this.http.post(`${this.baseUrl}/user/login`, user);
  };

  registerUser(user:any){
    return this.http.post(`${this.baseUrl}/user/register`, user);
  };


  IsLoggedIn(){
    let bool: boolean;
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if(token && role) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }

  userIsLoggedIn(){
    let bool: boolean;
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
  
    if(token && role == "admin") {
      bool = true;
    }else if(token && role == "SUPERVISOR"){
      bool = true;
    }else if(token && role == "CSO"){
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }


}
