import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{GlossyService} from '../glossy.service'
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component 
 {
  constructor( private  gs:GlossyService){}
  ngOnInit():void
  {
    
      

  }

//  @Input() datafromparent:string


// //to create custom event
//   @Output() Myevent= new EventEmitter();

// sendnames(data)
//  {
//    this.Myevent.emit(data)
//  }
 
}
