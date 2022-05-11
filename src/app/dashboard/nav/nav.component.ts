import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showCSO = true;
  showReg = true
  showSupervisor = true;
  showAdmin = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkRole()
  }

  checkRole(){
    const role = localStorage.getItem('role')
    if(role == "admin"){
      this.showCSO = false;
      this.showSupervisor = false;
      this.showAdmin = true;

    }else if(role == "SUPERVISOR"){
      this.showCSO  = false;
      this.showSupervisor = true;
      this.showAdmin = false;
    }else if(role == "CSO"){
      this.showCSO  = true;
      this.showSupervisor = false;
      this.showAdmin = false;
    }
}

  logOut(): void {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("user")
    this.router.navigate(['home']);
  }

}
