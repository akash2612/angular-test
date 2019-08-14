import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('',[Validators.required])
  })

  loginDetail:any[] = [];


  constructor(private router:Router,private authService:GlobalserviceService,private toast:ToastrService) { }

  onSubmit() {
    this.authService.authLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe(responseData => {
      for(var key in responseData) {
        this.loginDetail.push(responseData[key]);
      }
      for(let i=0;i<this.loginDetail.length;i++) {
        if(this.loginDetail[i].email == this.loginForm.value.email && this.loginDetail[i].password == this.loginForm.value.password) {
          this.authService.isLogin = true;
          sessionStorage.setItem('loginSession',String(this.authService.isLogin));
          this.router.navigate(['/main']);
          break;
        }else {
          this.authService.isLogin = false;
        }
      }
      if(this.authService.isLogin == false) {
        this.toast.error('Invalid Login');
      }
    },(err)=> {
      this.toast.error('Network Error');
    })
  }
  

}
