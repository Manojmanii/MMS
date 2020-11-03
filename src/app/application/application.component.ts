import { Component, OnInit } from '@angular/core';
import { GlossyService } from '../glossy.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  jobs1:any

  constructor( private gs:GlossyService) { }

  ngOnInit(): void
   {
    this.gs.getnewjobs().subscribe(res=>
      {
        this.jobs1=res['message']
      })
  }



  submitmodal(stddtls)
  {
    console.log(stddtls)
    this.gs.modalform(stddtls).subscribe(stdfrorm=>
      {
        alert(stdfrorm['message'])
      })
  }
  
}
