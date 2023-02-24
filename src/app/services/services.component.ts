import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../users-data.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  users:any ;
  constructor(private userData:UsersDataService){
   console.warn("userData",userData.users())
   this.users =userData.users();
  }
  ngOnInit() {
  }

}
