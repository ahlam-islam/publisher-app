import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {

  user:User = { userId:0, name:"",password:""}
 
  constructor() { }

  ngOnInit() {
  }

  saveData(){
    var object = this.user
    localStorage.setItem('user',JSON.stringify(object));
  }
  
  removeData(){
    localStorage.removeItem("user")
  }

}
