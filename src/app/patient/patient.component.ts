import { Component } from '@angular/core';
import { TServiceService } from '../t-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patientform:FormGroup;
  loading=false;
  errormsg=''
  constructor(private fb:FormBuilder,private tService:TServiceService, private route: Router){
    this.patientform=this.fb.group({Pusername:['',Validators.required],PLastname:[''],Punits:[''],PPhonenumber:['',Validators.required],Page:['',Validators.required],Pgender:[''],Pbloodgroup:['']});
  }
  onsubmit(){
    this.patientform.markAllAsTouched();
    if(this.patientform.valid){
    this.tService.patient(this.patientform.value).subscribe(
      (response:any) => {
        console.log('API Response patient:', response);
        if(response){
    //       sessionStorage.setItem('data',response)
          this.route.navigate(['/history']);
        }
        // Handle the response here
      },
      error => {
        console.error('API Error:', error);
        // Handle the error here
      }
    )
  }}

}
