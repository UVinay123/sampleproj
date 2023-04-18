import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string ="";
password : string ="";
show: boolean= false;
 
submit(){
console.log(this.Helloworld)
this.clear();
this.apiservice.postdata();

}
hide=true;

clear(){
this.username ="";
this.password = "";
this.show = true;
}

Helloworld = new FormGroup({
  Username: new FormControl('',Validators.email),
  password: new FormControl('',Validators.required)
})
constructor(private apiservice: ProjectService){}
}
