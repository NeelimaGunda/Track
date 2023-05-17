import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  store = "AJ0105 (Central Warehouse)";
  terminal = "5643 (apnt)";
  sync = "Never";
  ip = "192.618.10.125";
  dateToday: string | undefined;
  bodyHeight: any = 0;
  constructor() {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
  }
  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
  }
}
