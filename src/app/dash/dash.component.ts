import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        chart: { cols: 2, rows: 2 },
        table: { cols: 2, rows: 2 },
      };
    })
  );
constructor(private breakpointObserver: BreakpointObserver) {}

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

Secondtype = 'line';
  Seconddata = {

    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      borderColor: "red",
      backgroundColor: "red",
      data: [10, 30, 46, 2, 8, 50, 0],
      fill: false,
    }, {
      label: 'My Second dataset',
      borderColor: "blue",
      backgroundColor: "blue",
      data: [7, 49, 46, 13, 25, 30, 22],
      fill: false,
    }]
  }

Doptions = {
  title: {
    display: true,
    text: 'Predicted Orders in 2022'
  }, scales: {
    yAxes: [{ 
      scaleLabel: {
        display: true,
        labelString: "orders"
      }
    }],
    xAxes: [{ 
      scaleLabel: {
        display: true,
        labelString: "orders"
      }
    }]
  }
}

thirdtype = 'bar';
thirddata = {

  
    labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {     
      label: "Branch1",
      fill:'true',
      backgroundColor: '#ff0266',
      data:[10,11,12,13]
    },{
      label: "Branch2",
      fill:'true',
      backgroundColor: '#81c784',
      data:[20,21,22,23]
    },{
      label: "Branch3",
      fill:'true',
      backgroundColor: '#29b6f6',
      data:[31,32,33,34]
    }
  ]
};

poptions = {
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
