import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { HttpService } from 'src/app/Services/http.service';
import { SignalRService } from 'src/app/Services/signalr.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User
  constructor(public httpService:HttpService) {
  }

  ngOnInit() {
    this.httpService.list("https://jsonplaceholder.typicode.com/users").subscribe(data =>{
      this.users = data
    })
  }

}
