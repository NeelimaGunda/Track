import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { Location } from '@angular/common';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-bins',
  templateUrl: './bins.component.html',
  styleUrls: ['./bins.component.css']
})
export class BinsComponent {
  bodyHeight: any = 0;
  loader: boolean = false;
  bin: any = [];
  show = false;
  search: any = "";
  constructor(private router: Router, private service: MainserviceService, private location: Location,private _bottomSheetRef: MatBottomSheetRef<BinsComponent> ) {
    // Getting the height of the body.
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    console.log(this.service.iMSBins);
    this.bin = this.service.iMSBins;
    console.log(this.bin);
    if (this.bin.length == 0) {
      this.router.navigate([''])
    }
    // let data: any = localStorage.getItem('bins');
    // this.bin = JSON.parse(data);
  }
  ngOnInit() {

  }
  selectedCode(Code: any) {
    this._bottomSheetRef.dismiss();
    console.log(Code);
    this.service.searchsub.next(Code);

  }
}
