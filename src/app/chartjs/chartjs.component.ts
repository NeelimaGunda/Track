import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { MainserviceService } from '../mainservice.service';
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent {
  
  chart: any;

  pag(chartype: any) {
    this.service.page(chartype);
  }

  constructor(private service: MainserviceService, private router: Router) {

  }
  ngOnInit() {
    
  }
}
