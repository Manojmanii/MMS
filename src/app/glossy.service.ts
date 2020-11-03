import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlossyService {
data :object={}
  constructor(private hc:HttpClient) {}

  // getdata()
  // {
  //   // return this.hc.get<any>('https://reqres.in/api/users?page=2');
  // }

  jobformts(jobform):Observable<any>
  {
    return this.hc.post<any>('/admin/register',jobform);
  }

  getnewjobs():Observable<any>
  {
   return this.hc.get<any>('/student/readAll')
  }

  modalform(stddtls):Observable<any>
  {
     return this.hc.post<any>('/student/registrationform',stddtls)
  }

  //getting data from company collection and displaying in admin page

  datafromemp():Observable<any>
  {
    return this.hc.get<any>('/admin/readAll')
  }




}




















































 // method()
  // {
  //   return this.data;
  // }