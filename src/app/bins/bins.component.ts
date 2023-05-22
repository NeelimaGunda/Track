import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bins',
  templateUrl: './bins.component.html',
  styleUrls: ['./bins.component.css']
})
export class BinsComponent {
  bodyHeight: any = 0;
  loader: boolean = false;
  bin:any=[];
  show = false;
  search: any = "";
  constructor(private router: Router, private service: MainserviceService, private location: Location) {
    // Getting the height of the body.
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    console.log(this.service.iMSBins);
    this.bin = this.service.iMSBins;
    console.log(this.bin);
    let data: any = localStorage.getItem('bins');
    this.bin = JSON.parse(data);
  }
  ngOnInit() {
    // if (this.bin.length == 0)
    //   this.fetchData();
    // else
    //   console.log(this.bin);

  }
   // function to make an API call to fetch the data of bin and subscribe to the retrieved data. 
  // fetchData() {
  //   console.log("Calling fetch data in app component");
  //   this.loader = true;
  //   this.service.fetchImsBins().subscribe((data: any) => {
  //     console.log("Finished fetching data in app component")
  //     this.service.iMSBinsSub.next(data);
  //     this.loader = false;
  //   }, (err) => {
  //     console.log(err);

  //   })

  // }
}
