import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as data from "./sample.json";
import { UsersDataService } from "../users-data.service";
@Component({
  selector: "app-api",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"],
})
export class APIComponent {
  title = "image-gallery";
  products: any = (data as any).default;
  private data: any = [];
  constructor(private http: HttpClient , private userData:UsersDataService) {}


  getData() {
    const url = "https://jsonplaceholder.typicode.com/photos?albumId=1";
    // const url ="http://localhost:3000/people";
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
