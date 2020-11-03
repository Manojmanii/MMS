import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Input} from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Child1Component } from '/child1.component';
// import { Child2Component } from './child2/child2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentRegstrComponent } from './student-regstr/student-regstr.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import{AdminModule} from './admin/admin.module'
import{NgForm, FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import{MaterialModule} from './material/material.module';
import { ApplicationComponent } from './application/application.component'
@NgModule({
  declarations: [
    AppComponent,
    // Child1Component,
    // Child2Component,
    HomeComponent,
    LoginComponent,
    StudentRegstrComponent,
    ContactComponent,
    ApplicationComponent,

  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    RouterModule,
    BrowserAnimationsModule,
     MaterialModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
