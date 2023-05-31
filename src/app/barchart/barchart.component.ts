import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {

  ngOnInit(): void {
    this.createChart();
  }
  bar: any;

  createChart() {
    this.bar = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ["jan", "feb", "mar", "apr", "may", "jun"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1
        }, {
          type: 'line',
          label: 'My second Dataset',
          data: [45, 20, 60, 40, 70, 10, 80],
          backgroundColor: 'rgba(150, 70, 132, 0.2)',
          borderColor: 'rgb(150, 70, 132)',
          borderWidth: 1
        },
        {
          type: 'pie',
          label: 'My third Dataset',
          data: [35, 70, 45, 72, 25, 36, 50],
          backgroundColor: [
            'rgba(100, 88, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: ['rgb(100, 88 , 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'],
          borderWidth: 1,
        }]
      },
      options: {
        aspectRatio: 2,
        // layout:{
        //   padding:10
        // },
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInCubic',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }

}
