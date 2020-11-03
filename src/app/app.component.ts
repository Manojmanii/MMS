import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  datafromchild:string;
   data:string
   senddata(b)
  {
       this.data=b;
  }


}

//  { n:number=100;
//   s:string="manoj"
//   b:boolean=true;
//    saved:string
//    names:string[]=["mani","raji","rasu"]
//   save(m)
//   {
//       this.saved=m;
//   }

//   change()
//   {
//        this.b=!this.b
//   }

