import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/shared/Notifications/alert.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm!: FormGroup;
  public submitted = false;  
  token:any
  role:any

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private auth: AuthService,
    private spinner: NgxSpinnerService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }) 
  }

  get formControl() {
    return this.signinForm.controls;
  }

  loginUser(){
    this.submitted = true;
    if(this.signinForm.invalid){
      return;
    }else{
      this.spinner.show()
      this.auth.loginUser(this.signinForm.value).subscribe((data:any)=>{
        localStorage.setItem("user", data.data)
        localStorage.setItem("token", data.token)
        localStorage.setItem("role", data.role)
        if(data.status === 'success'){
          this.spinner.hide()
          this.router.navigate(['/Dashboard'])
          this.alert.showSuccess(data.message, 'Success');
        }else{
          this.spinner.hide()
          this.router.navigate(['/'])
          this.alert.showError(data.message, 'Error');
        }
      }, err =>{
        this.spinner.hide()
        let error = err.error
        this.alert.showError(error.message, 'Error');
        this.router.navigate(['/'])
      })
    }
  }
}
