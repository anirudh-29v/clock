import { Component } from '@angular/core';
import { TServiceService } from '../t-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public tservice:TServiceService){}
logout(){
  sessionStorage.clear();
}
}
