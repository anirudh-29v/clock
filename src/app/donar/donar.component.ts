import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TServiceService } from '../t-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent {
  donationform:FormGroup;
  loading=false;
  errormsg=''
  constructor(private fb:FormBuilder,private tService:TServiceService, private route: Router){
    this.donationform=this.fb.group({username:['',Validators.required],Lastname:[''],units:[''],phonenumber:[''],age:['',Validators.required],gender:[''],bloodgroup:['']});
  }

donate(){
  if(this.donationform.valid){
    console.log("this.donation",this.donationform.value)
    this.tService.donar(this.donationform.value).subscribe(
      (response:any) => {
        console.log('API Response:', response);
        if(response){
          this.route.navigate(['/dashnav']);
        }
      },
      error => {
        console.error('API Error:', error);
        // Handle the error here
      }
    )
  }
}
}
