import { Component } from '@angular/core';

@Component({
  selector: 'app-physical',
  templateUrl: './physical.component.html',
  styleUrls: ['./physical.component.css']
})
export class PhysicalComponent {
  bodyHeight: any = 0;
  constructor() {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
  }
  ngOnInit() {
  }
}
