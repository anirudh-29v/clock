import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TServiceService {
  serverurl: any = {
    getuserdata: 'http://localhost:3000/bbank',
    postdata: 'http://localhost:3000/bbank/data',
    logindata: 'http://localhost:3000/bbank/login',
    donardata: 'http://localhost:3000/bbank/donar',
    getDonar: 'http://localhost:3000/bbank/getdonar',
    patient: 'http://localhost:3000/bbank/patient',
    getpatient: 'http://localhost:3000/bbank/getpatient'
  };
  constructor(private http: HttpClient, private router: Router) { }
  getregister() {
    return this.http.get(this.serverurl.getuserdata)
  }
  sendData(data: any) {
    return this.http.post(this.serverurl.postdata, data);
  }

  auth(): boolean {
    if (sessionStorage.getItem('data') !== null) {
      return true
    }
    return false
  }

  login(logdata: any) {
    return this.http.post(this.serverurl.logindata,logdata)

  }
  donar(data: any) {
    return this.http.post(this.serverurl.donardata, data)
  }
  getdonardata() {
    return this.http.get(this.serverurl.getDonar)
  }

  patient(val:any) {
    return this.http.post(this.serverurl.patient, val)
  }

  getpatientdata() {
    return this.http.get(this.serverurl.getpatient)
  }
}

