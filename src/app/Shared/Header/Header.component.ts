import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  flag:boolean = false
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("user")){
      this.flag = true
    }else{
      this.flag = false
    }
  }

}
