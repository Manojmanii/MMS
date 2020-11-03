import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule,} from '@angular/router';
import{FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminnewjobsComponent } from './adminnewjobs/adminnewjobs.component';
import { AdminlogsComponent } from './adminlogs/adminlogs.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [AdminnewjobsComponent, AdminlogsComponent, AdmindashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
