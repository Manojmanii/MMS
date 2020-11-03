import { Component, OnInit } from '@angular/core';
import { GlossyService } from '../glossy.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-regstr',
  templateUrl: './student-regstr.component.html',
  styleUrls: ['./student-regstr.component.css']
})
export class StudentRegstrComponent implements OnInit {

  jobs1:any
  constructor( private gs:GlossyService ,private router:Router) { }
   
  ngOnInit(): void 
  {  
    this.gs.getnewjobs().subscribe(res=>
      {
        this.jobs1=res['message']
      })
  }
 
  openapp(appr)
{
    this.router.navigate(['app'])
}


}
