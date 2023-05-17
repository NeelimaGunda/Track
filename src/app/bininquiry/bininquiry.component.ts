import { Component } from '@angular/core';

@Component({
  selector: 'app-bininquiry',
  templateUrl: './bininquiry.component.html',
  styleUrls: ['./bininquiry.component.css']
})
export class BininquiryComponent {
  bodyHeight: any = 0;
  show = false;
  constructor() {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
  }
  ngOnInit() {

  }
}
