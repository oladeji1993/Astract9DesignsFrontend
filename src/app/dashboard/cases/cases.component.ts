import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/shared/Notifications/alert.service';
import { ComplaintService } from 'src/app/shared/services/complaint/complaint.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  loader = true
  p: number = 1;
  public submitted = false;
  createModal = false
  createForm!: FormGroup;
  complaints: any = [];
  Rawcomplaints: any = [];
  loggedInUser: any

  constructor(
    private complaintService: ComplaintService,
    public fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private alert: AlertService

  ) { }

  ngOnInit(): void {
    this.getCases()
    this.createForm = this.fb.group({
      complain: ['', Validators.compose([Validators.required])],
      complain_description: ['', Validators.compose([Validators.required])]
    })
    this.loggedInUser = localStorage.getItem('user')
  }

  getCases(){
    this.complaintService.getComplaints().subscribe((data:any) => {
      this.Rawcomplaints = data;
      let user = localStorage.getItem('user');
      for(let i = 0; i < this.Rawcomplaints.length; i++){
        if(this.Rawcomplaints[i].createdBy === user){
          this.complaints.push(this.Rawcomplaints[i])
        }
      }
      this.loader = false;

    })
  }

  createComplaint(){
    this.createModal = true
  }

  closeModal(){
    this.createModal = false
  }

  addComplaint(){
    this.submitted = true;
    if(this.createForm.invalid){
      return;
    }else{
        
        const {complain, complain_description} = this.createForm.value;
        const data = {
          complain,
          complain_description,
          createdBy: this.loggedInUser,
        }
        this.spinner.show()
        this.complaintService.createComplaint(data).subscribe((data:any)=>{
          if(data.message === 'Complaint Saved Successfully'){
            this.spinner.hide()
            this.createModal = false
            this.alert.showSuccess(data.message, 'Success');
            this.getCases()
          }else{
            this.spinner.hide()
            this.createModal = false
            this.alert.showError(data.message, 'Error');
          }
        }, err =>{
          this.spinner.hide()
          let error = err.error
          this.alert.showError(error.message, 'Error');
          this.createModal = false
        })
    }

  }

}
