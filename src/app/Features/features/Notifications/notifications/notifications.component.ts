import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { HttpService } from 'src/app/Services/http.service';
import {Notification} from 'src/app/Models/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  users:User
  notification:Notification ={title:"",message:"",sendTo:"",alertId:0,sendTime:new Date(),status:""}
  constructor(public httpService:HttpService) { }

  // show all online users
  ngOnInit() {
    this.httpService.list("https://jsonplaceholder.typicode.com/users").subscribe(data =>{
      this.users = data
    })
  }
  // send notifications object to database
  handelNotification(){
    this.httpService.create("https://jsonplaceholder.typicode.com/posts",this.notification).subscribe(error =>{
    console.log(error)
    })
  }

}
