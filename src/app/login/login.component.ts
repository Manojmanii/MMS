import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { GlossyService } from '../glossy.service';
import { publishFacade } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userobj:any;
  constructor( private gs:GlossyService,private router:Router) { }

  ngOnInit(): void {
  }
  submitform(userobj)
  {
    console.log(userobj)
    if(userobj.email=="badboy"&&userobj.password=="420")
    {  
      this.router.navigate(['/admindash'])
    }
    else
    {
      console.log('err in navigating')
    }
  }
}


