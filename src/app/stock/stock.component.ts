import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  bodyHeight: any = 0;
  loader: boolean = false;
  show = false;
  stock:any=[];
  constructor(private router: Router, private service: MainserviceService) {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    this.service.iMSBinsSub.subscribe((data: any) => {
    this.stock= data;
      // console.log(this.modules);
    });
    console.log(this.service.iMSBins);
    this.stock= this.service.iMSBins;
  }
  ngOnInit() {
    if (this.stock.length == 0)
      this.fetchData();
    else
      console.log(this.stock);

  }
  fetchData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsBins().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSBinsSub.next(data);
      this.loader = false;
    }, (err) => {
      console.log(err);

    })
  }

}

