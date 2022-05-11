import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/shared/services/complaint/complaint.service';

@Component({
  selector: 'app-all-cases',
  templateUrl: './all-cases.component.html',
  styleUrls: ['./all-cases.component.scss']
})
export class AllCasesComponent implements OnInit {
  loader = true
  complaints: any
  p: number = 1;


  constructor(
    private complaintService: ComplaintService,

  ) { }

  ngOnInit(): void {
    this.getCases()
  }

  getCases(){
    this.complaintService.getComplaints().subscribe((data:any) => {
      this.complaints = data;
      console.log(this.complaints);
      this.loader = false;
    })
  }

}
