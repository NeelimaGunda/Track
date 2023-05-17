import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MainserviceService } from '../mainservice.service';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

export class LinechartComponent {
  ngOnInit(): void {
    this.createChart();
  }
  
   config: any;
  createChart() {
    this.config = new Chart("MyChart", {
      type: 'line',
      data: this.service.list,
      //  {
      //   labels: ["jan", "feb", "mar", "apr", "may", "jun",],
      //   datasets: [{
      //     // spanGaps:true,
      //     // showLine:false,
      //     // pointRadius:0,
      //     label: 'My First Dataset',
      //     data: [65, 59, 80, 81, 56, 55, 40],
      //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
      //     borderColor: 'rgb(255, 99, 132)',
      //     borderWidth: 1,
      //     yAxisID:'y',
      //     borderDash:[6,6],
      //     pointStyle:'triangle',
      //     pointRadius:5,
      //   },
      //   {
        
      //     label: 'My second Dataset',
      //     data: [45, 89, 60, 43, 55, 80, 40],
      //     backgroundColor:  'rgba(150, 70, 132, 0.2)',
      //     borderColor: 'rgb(150, 70, 132)',
      //     borderWidth: 1,
      //     fill:true,
      //     yAxisID:'y1',
      //     pointStyle:'cross'
          
      //   },
      //   {
      //     label: 'My second Dataset',
      //     data: [80, 40, 20, 50, 35, 73, 15],
      //     backgroundColor:  'red',
      //     borderColor: 'red',
      //     borderWidth: 1,
      //     stepped:true
      //   }
      // ]
      // },
      options: {
        interaction:{
          intersect:false,
          mode:'index'
        },
       // animations: {
        //   tension: {
        //     duration: 1000,
        //     easing: 'easeInCubic',
        //     from: 1,
        //     to: 0,
        //     loop: true
        //   }
        // },
        scales: {
          y: {
            beginAtZero: true,
            type:'linear',
            display:true,
            position:'right'
          },
          y1:{
            beginAtZero: true,
            type:'linear',
            // reverse:true,
            display:true,
            position:'left',
            grid:{
              drawOnChartArea:false
            }   
          }
        },
        plugins:{
          title:{
            display:true,
            text: 'Line chart'
          }
        },
        
      },
    });
  }
  constructor(private service: MainserviceService){}
  
}
