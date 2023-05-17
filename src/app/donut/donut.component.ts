import { Component } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
ngOnInit(){
this.createChart()
}
chart:any;
createChart(){
  this.chart = new Chart("MyChart", {
   type:'doughnut',
   data:{
    labels:["Cooling","Residential","Heating","Lighting","Others"],
    datasets:[{
      label: 'My First Dataset',
          data: [40,26,59,15,37],
          backgroundColor:  'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1
    }]
   },
   options:{
    plugins:{
      title:{
        display:true,
      
      }
    }
   }

  })
}

}

