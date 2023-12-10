import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TServiceService } from '../t-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
// Registerform:FormGroup
// data:any=[]
// constructor(private fb:FormBuilder){
//   this.Registerform=this.fb.group({Username:[],
//     LastName:[],
//     emailID:[],
//     Password:[],
//     gender:[],
//     PhoneNumber:[]
//   })}
//   submit(){
//     sessionStorage.setItem('info',JSON.stringify(this.Registerform.value))
//     console.log(sessionStorage)
//   }
//   edit(){
//     this.data.push(this.Registerform.value)
//     this.data={
// Username:((this.Registerform.value.Username))
//     }
//   }
Registerform: FormGroup;
userData:any = [];
editIndex;
updatemode:Boolean
tdata=false;
errormsg=''
loading=false

constructor(private fb: FormBuilder, private router: Router,private tservice:TServiceService) {
  this.Registerform = this.fb.group({
    Username: ['',Validators.required],
    Lastname: [''],
    emailID: ['',Validators.required],
    password: ['',Validators.required],
    Repassword: ['',Validators.required]
  });


}
checkpass(){
  const pass=this.Registerform.value.password
  const Repass=this.Registerform.value.Repassword
  if(pass!== Repass){
    console.log
    this.errormsg='Password did not match'
  }
  else if(pass== Repass){
    this.errormsg=''
  }
}
register(){
  this.Registerform.markAllAsTouched();
  if(this.Registerform.valid){
  this.tservice.sendData(this.Registerform.value).subscribe(
    (response:any) => {
      console.log('API Response register:', response);
      if(response){
        alert('Registration Succes')
        // sessionStorage.setItem('data',response)
        this.router.navigate(['']);
      }
      // Handle the response here
    },
    error => {
      console.error('API Error:', error);
      // Handle the error here
    }
  )
}
  }
  
}