import { Component, OnInit } from '@angular/core';
import{GlossyService} from "../glossy.service"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private gs:GlossyService) { }
  data1:any;
  // mani:any;
  ngOnInit(): void 
  {
    // this.gs.getdata().subscribe(res=>{this.data1=res["data"]
    //   console.log(this.data1)})
      // this.mani=this.data1
      // console.log(this.mani)

  }

  // fromservice()
  // {
   
  // }
}
