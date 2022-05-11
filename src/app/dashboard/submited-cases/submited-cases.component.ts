import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/shared/Notifications/alert.service';
import { ComplaintService } from 'src/app/shared/services/complaint/complaint.service';

@Component({
  selector: 'app-submited-cases',
  templateUrl: './submited-cases.component.html',
  styleUrls: ['./submited-cases.component.scss']
})
export class SubmitedCasesComponent implements OnInit {

  loader = true
  complaints: any = [];
  p: number = 1;
  public submitted = false;

  constructor(
    private complaintService: ComplaintService,
    private spinner: NgxSpinnerService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.getCases()
  }

  
  getCases(){
    this.complaintService.getComplaints().subscribe((data:any) => {
      this.complaints = data;
      this.loader = false;

    })
  }

  // createComplaint(){
  //   this.createModal = true
  // }

  // closeModal(){
  //   this.createModal = false
  // }

  validate(complaint: any){
    let id = complaint._id
    console.log(id)
    let data = {
      status: "validated"
    }
    if(complaint.status === "validated"){
      this.alert.showError("Case validated already", 'Error');
    }else{
      this.complaintService.updateComplaints(id, data).subscribe((data: any) =>{
        if(data.message === "Complaint Updated Successfully"){
          this.alert.showSuccess(data.message, 'Success');
          this.getCases()
        }else{
          this.spinner.hide()
          this.alert.showError(data.message, 'Error');
        }
      }, err =>{
        this.spinner.hide()
        let error = err.error
        this.alert.showError(error.message, 'Error');
      })
    }
  }

  reject(complaint: any){
    let id = complaint._id
    console.log(complaint)
    console.log(id)
    let data = {
      status: "Rejected"
    }
    if(complaint.status === "Rejected"){
      this.alert.showError("Case rejected already", 'Error');
    }else{
      this.complaintService.updateComplaints(id, data).subscribe((data: any) =>{
        if(data.message === "Complaint Updated Successfully"){
          this.alert.showSuccess(data.message, 'Success');
          this.getCases()
        }else{
          this.alert.showError(data.message, 'Error');
        }
      }, err =>{
        let error = err.error
        this.alert.showError(error.message, 'Error');
      })
    }
  }
}
