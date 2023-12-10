import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashnavbarComponent } from './dashnavbar/dashnavbar.component';
import { DonarComponent } from './donar/donar.component';
import { PatientComponent } from './patient/patient.component';
import { HistoryComponent } from './history/history.component';

const route:Routes=[
  {path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:'dashnav',component:DashnavbarComponent},
{path:'donar',component:DonarComponent},
{path:'patient',component:PatientComponent},
{path:'history',component:HistoryComponent}]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashnavbarComponent,
    DonarComponent,
    PatientComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route ),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
