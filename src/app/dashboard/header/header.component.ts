import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sideBarOpen: boolean = false;
  show = true;
  showCSO = true;
  showReg = true
  showSupervisor = true;
  showAdmin = true;
  showprodManagerandQuality = true;
  loggedInUser: any

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user')
    this.checkRole()
  }

  sideBar(){
    document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
    this.sideBarOpen = true;
  }

  removeSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
    this.sideBarOpen = false;
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
