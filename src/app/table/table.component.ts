import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public data = [
    { Name: 'Ajay', email: 'Ajay@gmail.com', phone: 9988767676 ,company:'Tata Technologies'},
    { Name: 'rahul', email: 'rahull@gmail.com', phone: 9988767676 ,company:'Tata Technologies'},
    { Name: 'shubham', email: 'shubham@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'mayank', email: 'mayank@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'deepak', email: 'deepak@gmail.com', phone: 9988767676 ,company:'Tata Technologies' },
    { Name: 'rahul', email: 'rahull@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'shubham', email: 'shubham@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'mayank', email: 'mayank@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'deepak', email: 'deepak@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'rahul', email: 'rahull@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'deepak', email: 'deepak@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'rahul', email: 'rahull@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'shubham', email: 'shubham@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'mayank', email: 'mayank@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'deepak', email: 'deepak@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},
    { Name: 'rahul', email: 'rahull@gmail.com', phone: 9988767676  ,company:'Tata Technologies'},

  ];
  dtOptions:DataTables.Settings = {};
  ngOnInit() {
    {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25],
        processing: true
      };
    };
  }
}


