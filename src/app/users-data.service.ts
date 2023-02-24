import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }
  url ="http://localhost:3000/employees";
  users(){
    return[
      { Name: 'rahul' }, { email: 'rahull@gmail.com' }, { phone: 9988767676 },
      { Name: 'shubham' }, { email: 'shubham@gmail.com' }, { phone: 9988767676 },
      { Name: 'mayank' }, { email: 'mayank@gmail.com' }, { phone: 9988767676 },
      { Name: 'deepak' }, { email: 'deepak@gmail.com' }, { phone: 9988767676 },
    ]
  }
  saveUsers(Data1:any){
    return this.http,post(this.url,Data1);
  }
}
