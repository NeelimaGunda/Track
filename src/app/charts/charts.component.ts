import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  ngOnInit() {
   
  }
  constructor(private router: Router){}
  page(type:any){
    this.router.navigate(['charts/'+type]);
  }
}
