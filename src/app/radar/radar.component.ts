import { Component } from '@angular/core';
import { Chart, layouts } from 'chart.js';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
  ngOnInit(): void {
    this.createChart();
  }
  config: any;
  
  createChart() {
    this.config = new Chart("MyChart", {
      type: 'radar',
      data: {
        labels: [ 'Eating','Drinking','Sleeping','Designing','Coding','Cycling', 'Running'  ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
  options: {
    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: 'easeInCubic',
    //     from: 1,
    //     to: 0,
    //     loop: true
    //   }
    // },
    plugins:{
      title:{
        display:true,
        text:'hello',
        color:'black'
      },
      legend:{
        labels:{
          color: 'white'
        }
      },
      // tooltip: {
      //   callbacks: {
      //     footer: this.footer,
      //   }
      // }
    },
  },
});
  }
}
