import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  role: any

  constructor() { }

  ngOnInit(): void {
    this.getrole()
  }

  getrole(){
    this.role = localStorage.getItem('role')
  }

}
