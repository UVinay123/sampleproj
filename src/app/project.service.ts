import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  postdata(){
    this.http.post("https://reqres.in/api/login",{
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }).subscribe((data: any)=>{
     console.log(data);
    })
  }
}
