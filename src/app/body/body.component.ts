import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  menus: any = [{

    "Id": 1,

    "Code": "INV",

    "Name": "Inventory",

    "Name2": "",

    "Description": "Inventory",

    "Description2": "",

    "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",

    "Status": 0,

    "CreatedBy": "sysadmin",

    "CreatedDate": "1900-01-01T00:00:00",

    "UpdatedBy": "sysadmin",

    "UpdatedDate": "1900-01-01T00:00:00", "route": "../invbind"

  },

  {

    "Id": 2,

    "Code": "PRN",

    "Name": "Label Printing",

    "Name2": "",

    "Description": "Label Printing",

    "Description2": "",

    "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_print.png",

    "Status": 0,

    "CreatedBy": "sysadmin",

    "CreatedDate": "1900-01-01T00:00:00",

    "UpdatedBy": "sysadmin",

    "UpdatedDate": "1900-01-01T00:00:00", "route": "../labelbind"

  },

  {

    "Id": 3,

    "Code": "PUR",

    "Name": "Purchase",

    "Name2": "",

    "Description": "Purchase",

    "Description2": "",

    "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_purchase.png",

    "Status": 0,

    "CreatedBy": "sysadmin",

    "CreatedDate": "1900-01-01T00:00:00",

    "UpdatedBy": "sysadmin",

    "UpdatedDate": "1900-01-01T00:00:00", "route": "../purchasebind"

  },

  {

    "Id": 4,

    "Code": "SLS",

    "Name": "Sale",

    "Name2": "",

    "Description": "Sale",

    "Description2": "",

    "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_sale.png",

    "Status": 0,

    "CreatedBy": "sysadmin",

    "CreatedDate": "1900-01-01T00:00:00",

    "UpdatedBy": "sysadmin",

    "UpdatedDate": "1900-01-01T00:00:00", "route": "../salebind"

  },

  {

    "Id": 5,

    "Code": "STR",

    "Name": "Store",

    "Name2": "",

    "Description": "Store",

    "Description2": "",

    "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_store.png",

    "Status": 0,

    "CreatedBy": "sysadmin",

    "CreatedDate": "1900-01-01T00:00:00",

    "UpdatedBy": "sysadmin",

    "UpdatedDate": "1900-01-01T00:00:00", "route": "../storebind"

  },
  {

    "Id": 6,

    "Code": "SVC",

    "Name": "Service",

    "Name2": "",

    "Description": "Service",

    "Description2": "",

    "ImageURLAddress": '../../assets/ic_print.png',

    "Status": 0,

    "CreatedBy": "sysadmin",

    "CreatedDate": "1900-01-01T00:00:00",

    "UpdatedBy": "sysadmin",

    "UpdatedDate": "1900-01-01T00:00:00", "route": "../servicebind"

  },
  {

    "Id": 7,

    "Code": "WHS",

    "Name": "Warehouse",

    "Name2": "",

    "Description": "Warehouse",

    "Description2": "",

    "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_warehouse.png",

    "Status": 0,

    "CreatedBy": "sysadmin",

    "CreatedDate": "1900-01-01T00:00:00",

    "UpdatedBy": "sysadmin",

    "UpdatedDate": "1900-01-01T00:00:00", "route": "../ware"
  },
  ]
  bodyHeight: any = 0;
  url: any;
  b = true;
  a = false;
  body: any = { arrow: true, menu: true };
  dash: any = { nav: false, name: false, module: false, ellips: false };
  header: any = "";
  modules: any = [];
  loader: boolean = false;
  submodule: any = [];
  accordion: any = [];
  type: any = [];
  show = false;
  selectedModule: any = "";
  menu: boolean = false;
  list: boolean = true;
  head: boolean = true;
  dots: boolean = true;
  arrow: boolean = false;
  nav: boolean = true;
  physical: any = { Item: false }
  constructor(private router: Router, private location: Location, private service: MainserviceService) {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    let cdata: any = localStorage.getItem('modules');
    this.modules = JSON.parse(cdata);
    console.log(this.modules);
    this.service.iMSModulesSub.subscribe((data: any) => {
      this.modules = data;
    });
    this.type = this.service.moduleCode;
    console.log(this.type);
    console.log(this.service.iMSModules);
    // this.modules = this.service.iMSModules;
    // console.log(this.modules);
    console.log(this.menus);
    console.log(this.service.iMSSubmodules);
    this.submodule = this.service.iMSSubmodules;
    console.log("terminal form data");
    console.log("url:" + this.service.turl);
    console.log("company:" + this.service.company);
    console.log("store:" + this.service.store);
    console.log("terminal number:" + this.service.terminalnum);
    console.log("terminal name:" + this.service.terminalname);
    this.service.iMSSubmodulesSub.subscribe((data: any) => {
      this.submodule = data;
    })
    // this.type = this.service.moduleCode;
    // console.log(this.type);
  }
  goTopage(b: any) {
    console.log(b.Code);
    this.service.dashsub.next(this.dash);
    this.service.bodysub.next(this.body);
    this.service.moduleCodeSub.next(b);
    this.type = this.service.moduleCode;
    console.log(this.type);
    this.router.navigate(['dashboard/gmodule']);
  }
  // back() {
  //   this.b = true;
  //   this.a = false;
  //   this.dots = true;
  //   this.list = true;
  //   this.arrow = false;
  //   this.head = true;
  //   this.nav = true;
  //   this.menu = false;
  //   this.router.navigate(['/dashboard']);
  // }
  // goBack() {
  //   this.location.back();
  //   this.service.bsub.next(true);
  //   this.service.asub.next(false);
  //   this.service.genericControllerJsonSubject.next(this.physical = {});
  // }
  page(moduleCode: any) {
    console.log(moduleCode);
    this.service.SubmodulesSub.next(moduleCode);
    this.selectedModule = moduleCode;
    this.accordion = this.submodule.filter((e: any) => e['ModuleCode'] == moduleCode);
  }
  ngOnInit() {
    console.log(this.modules);
    if (this.modules == null || this.modules.length == 0) { // && this.stores!=null
      // console.log(this.companies[1]);
      this.router.navigate(['']);
      this.fetchData();


    }
    else
      this.loader = false;
    //   this.fetchData();
    // if (this.modules!=null) {
    //   // this.loader = false;
    //   // this.fetchData();
    // }
    // else if(this.modules!=0){


  }
  fetchData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsModules().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSModulesSub.next(data);
      this.loader = false;
      this.fetchSubData();
    }, (err) => {
      console.log(err);
    })
  }
  fetchSubData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsSubmodules().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSSubmodulesSub.next(data);
      this.loader = false;
    }, (err) => {
      console.log(err);
    })
  }
}

