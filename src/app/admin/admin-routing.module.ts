import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlogsComponent } from './adminlogs/adminlogs.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminnewjobsComponent } from './adminnewjobs/adminnewjobs.component';

const routes: Routes =
 [  {path:'admindash',component:AdmindashboardComponent,
    children:[ {path:'',redirectTo:'newjobs',pathMatch:'full'},
      {path:'newjob',component:AdminnewjobsComponent},
            {path:'logs',component:AdminlogsComponent}]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
