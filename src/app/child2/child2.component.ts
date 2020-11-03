import { Component, OnInit } from '@angular/core';
import{GlossyService} from '../glossy.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private gs:GlossyService) { }
      data1:object={};
  ngOnInit(): void 
  {
    //  this.data1=this.gs.method();
      console.log(this.data1)
    
  }

  
}
