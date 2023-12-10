import { Component, OnInit } from '@angular/core';
import { TServiceService } from '../t-service.service';

@Component({
  selector: 'app-dashnavbar',
  templateUrl: './dashnavbar.component.html',
  styleUrls: ['./dashnavbar.component.css']
})

export class DashnavbarComponent implements OnInit {
  count = 0
  counta = 0
  countb = 0
  countc = 0
  countd = 0
  counte = 0
  countf = 0
  countg = 0
  counth = 0
  counti = 0
total=0
  constructor(private tservice: TServiceService) { }
  ngOnInit() {
    this.tservice.getdonardata().subscribe((res: any) => {
      console.log(res.length, "donar check in dash",res)
      this.total =res.length
      for (const itr of res) {
        switch (itr.bloodgroup) {
          case 'AB+':
            this.counta += 1;
            break;
          case 'O+':
            this.countb += 1;
            break;
          case 'A+':
            this.countc += 1;
            break;
          case 'A-':
            this.countd += 1;
            break;
          case 'O-':
            this.counte += 1;
            break;
          case 'B+':
            this.countf += 1;
            break;
          case 'B-':
            this.countg += 1;
            break;
          case 'AB-':
            this.counth += 1;
            break;
          default:this.count
            break;
        }
        

      }
    })
  }
}
