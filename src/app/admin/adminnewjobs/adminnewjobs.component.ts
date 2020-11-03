import { Component, OnInit } from '@angular/core';
import { GlossyService } from 'src/app/glossy.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-adminnewjobs',
  templateUrl: './adminnewjobs.component.html',
  styleUrls: ['./adminnewjobs.component.css']
})
export class AdminnewjobsComponent implements OnInit {

  constructor( private gs:GlossyService) { }

  ngOnInit(): void {
  }

  submitjobform(jobform)
  {
    // console.log(jobform)
    this.gs.jobformts(jobform).subscribe(data1=>
      {
        alert(data1['message']);
      })
  }

 

}
