import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
 
  constructor(private breakpointObserver: BreakpointObserver) {}
  menuItems = ['dashboard', 'sales'];
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
