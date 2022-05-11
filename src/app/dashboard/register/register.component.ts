import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/shared/Notifications/alert.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { MustMatch } from 'src/app/shared/services/must-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  public submitted = false;
  allRoles!: any

  constructor(
    private router: Router,   
    public fb: FormBuilder,
    private authService: AuthService,
    private alert: AlertService,
    private spinner: NgxSpinnerService,

  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      role_id: ['', Validators.compose([Validators.required])],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
    // this.getRoles()
  }

  get formControl() {
    return this.registerForm.controls;
  }

  login(){
    this.router.navigate(["/home/login"])
  }
  
  registerUser(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }else{
      const { username, email, role_id, password } = this.registerForm.value
      const data = {
        username, 
        email, 
        role: role_id, 
        password
      }
      console.log(data)
      this.authService.registerUser(data).subscribe((resp:any) =>{
        this.spinner.show()
        if(resp.status === 401){
          this.alert.showError(resp.message, 'Error');
          this.spinner.hide()
          return;
        }
        this.spinner.hide()
        this.alert.showSuccess(resp.message, 'Success');
        this.registerForm.reset();
        this.formReset(this.registerForm)
      })
    }

  }
  formReset(form:any) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      form.get(key).setErrors(null) ;
  });
}
}
