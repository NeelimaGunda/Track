import { Component } from '@angular/core';

@Component({
  selector: 'app-itemno',
  templateUrl: './itemno.component.html',
  styleUrls: ['./itemno.component.css']
})
export class ItemnoComponent {
  bodyHeight: any = 0;
  bgc:any= " rgb(37, 93, 166)";
  bgc1:any;
  bgc2:any;
  enter:any="Enter an Item no.";
  constructor() {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
  }
  ngOnInit() {

  }
  description(){
    this.bgc="";
    this.bgc1=" rgb(37, 93, 166)";
    this.enter="Enter a description";
  }
  barCode(){
    this.bgc="";
    this.bgc1="";
    this.bgc2=" rgb(37, 93, 166)";
    this.enter="Scan/enter a barcode";
  }
  lookUp(){
    this.bgc=" rgb(37, 93, 166)";
    this.bgc1="";
    this.bgc2="";
    this.enter="Enter an Item no.";
  }
}
