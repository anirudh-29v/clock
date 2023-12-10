import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TServiceService } from '../t-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup;
  errormsg = ''
  constructor(private fb: FormBuilder, private tService: TServiceService, private route: Router) {
    this.loginform = this.fb.group({ loginname: ['', Validators.required], loginpassword: ['', Validators.required] });
  }
  loginuser() {
    this.loginform.markAllAsTouched();
    if (this.loginform.valid) {
      this.tService.getregister().subscribe((res: any) => {
        if (res) {
          const name = this.loginform.value.loginname
          const password = this.loginform.value.loginpassword
          console.log(name, password)
          for (const itr of res) {
            console.log(itr.username, itr.Password, "check itr")
            if (itr.username === name && itr.Password === password) {
              sessionStorage.setItem('data', res)
              this.route.navigate(['/home'])
              this.errormsg = ''
            }
            else {
              this.errormsg = 'Invalid Crendentials'
            }
          }
        }
      }, error => {
        console.log('API ERROR LOGIN:', error)
      })
    }
  }
}
