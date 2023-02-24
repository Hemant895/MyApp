import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        borderColor: 'purple', //line color
        pointRadius:4,
        pointBorderColor: 'white',
        pointBackgroundColor:'#cd486b',
        label: "Sales",
        fill:false,
        data: [65, 59, 80, 81, 56, 80, 90]
      }
    ]
  };

options = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{ display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}
  }




