import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentRegstrComponent } from './student-regstr/student-regstr.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'student',component:StudentRegstrComponent},
  {path:'contact',component:ContactComponent},
  {path:"app",component:ApplicationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
