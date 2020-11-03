import { Component, OnInit } from '@angular/core';
import { GlossyService } from 'src/app/glossy.service';

@Component({
  selector: 'app-adminlogs',
  templateUrl: './adminlogs.component.html',
  styleUrls: ['./adminlogs.component.css']
})
export class AdminlogsComponent implements OnInit {
  empform:any
  constructor(private gs:GlossyService ) { }

  ngOnInit(): void 
  {
    this.gs.datafromemp().subscribe(res=>
      {
          this.empform=res['message']
      })

  }

}
