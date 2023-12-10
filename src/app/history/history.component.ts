import { Component, OnChanges, OnInit } from '@angular/core';
import { TServiceService } from '../t-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  data: any[];
  constructor(private tService: TServiceService, private route: Router) { }
  ngOnInit() {
    this.tService.getpatientdata().subscribe(
      (response: any) => {
        console.log('API Response donar:', response);
        if (response) {
          this.data = response
          // sessionStorage.setItem('data',response)
          console.log('patient', this.data)
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
