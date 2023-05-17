import { Component } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
  img: any = "url('../../assets/background.png')";
  url: any;
  b = false;
  d = false;
  a = false;
  array = false;
  c = false;
  header: any = "";
  modules: any = [];
  loader: boolean = false;
  submodule: any = [];
  accordion: any = [];
  type: any = [];
  search: any = "";
  show = false;
  sidearrow = false;
  selectedModule: any = "";
  body: any = { arrow: false, menu: false };
  dash: any = { nav: true, name: true, module: true, ellips: true }
  nav: boolean = true;
  physical: any = {};
  constructor(private router: Router, private location: Location, private service: MainserviceService,private route:ActivatedRoute) {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    let cdata: any = localStorage.getItem('modules');
    this.modules = JSON.parse(cdata);
    this.service.iMSModulesSub.subscribe((data: any) => {
      this.modules = data;
    });
    this.type = this.service.moduleCode;
    console.log(this.type);
    console.log(this.service.iMSModules);
    this.modules = this.service.iMSModules;
    console.log(this.modules);
    console.log(this.service.iMSSubmodules);
    this.submodule = this.service.iMSSubmodules;
    // console.log("terminal form data");
    // console.log("url:" + this.service.turl);
    // console.log("company:" + this.service.company);
    // console.log("store:" + this.service.store);
    // console.log("terminal number:" + this.service.terminalnum);
    // console.log("terminal name:" + this.service.terminalname);
    this.service.iMSSubmodulesSub.subscribe((data: any) => {
      this.submodule = data;
    })
    // this.type = this.service.moduleCode;
    // console.log(this.type);
  }
  // goTopage(a: any) {
  //   this.img = "";
  //   console.log(a.Code);
  //   this.dots = false;
  //   this.head = false;
  //   this.list = false;
  //   this.arrow = true;
  //   this.menu = true;
  //   this.nav = false;
  //   this.service.moduleCodeSub.next(a);
  //   this.type = this.service.moduleCode;
  //   console.log(this.type);
  //   this.router.navigate(['dashboard/gmodule']);
  // }
  back() {
    this.a = false;
    this.body = { arrow: false, menu: false };
    this.dash = { nav: true, bar: true, name: true, module: true, ellips: true };
    this.nav = true;
    this.router.navigate(['/dashboard']);
  }
  goBack() {
    // this.router.navigate(['/dashboard/gmodule']);
    this.location.back();
    this.service.arraysub.next(false);
    this.service.asub.next(false);
    this.service.bodysub.next(this.body = { arrow: true, menu: true });
    this.service.genericControllerJsonSubject.next(this.physical = {});
  }
  return() {
    this.location.back();
    this.service.bsub.next(false);
    this.service.asub.next(true);
    this.service.genericControllerJsonSubject.next(this.physical = { Bins: true, Bin: true });
    // this.service.genericControllerJsonSubject.next(this.physical = {});
  }
  toggle() {
    this.location.back();
    this.service.csub.next(false);
    this.service.asub.next(true);
    this.physical = { link: true, icon: true, load: true, Nav: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true, Reason: true };
    this.service.genericControllerJsonSubject.next(this.physical);
  }
  draw() {
    this.location.back();
    this.service.dsub.next(false);
    this.service.asub.next(true);
    this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, place: true, Unit: true, Description: true };
    this.service.genericControllerJsonSubject.next(this.physical);
  }
  page(moduleCode: any) {
    console.log(moduleCode);
    this.service.SubmodulesSub.next(moduleCode);
    this.selectedModule = moduleCode;
    this.accordion = this.submodule.filter((e: any) => e['ModuleCode'] == moduleCode);
    console.log(this.accordion);
  }
  sideNav(list: any) {
    this.sidearrow = true;
    this.dash = { nav: false, name: false, module: false, ellips: false }
    this.service.sideNav(list);
    this.router.navigate(['dashboard/physicalcount']);
  }
  Nav(){
    this.router.navigate(['/dashboard']);
    // this.location.back();
    this.sidearrow=false;
    this.dash = { nav:true, name: true, module: true, ellips: true };
    this.service.asub.next(false);
    this.service.genericControllerJsonSubject.next(this.physical = {});
    // this.service.bodysub.next(this.body = { arrow: true, menu: true });
  
  }
  ngOnInit() {
    this.service.searchsub.next(this.search);
    this.service.moduleCodeSub.subscribe((data: any) => {
      this.type = data;
    })
    this.service.bodysub.subscribe((data: any) => {
      this.body = data;
    })
    this.service.dashsub.subscribe((data: any) => {
      this.dash = data;
    })
    this.service.asub.subscribe((data: any) => {
      this.a = data;
    })
    this.service.bsub.subscribe((data: any) => {
      this.b = data;
    })
    this.service.csub.subscribe((data: any) => {
      this.c = data;
    })
    this.service.dsub.subscribe((data: any) => {
      this.d = data;
    })
    this.service.arraysub.subscribe((data: any) => {
      this.array = data;
    })
    // this.service.searchsub.subscribe((data: any) => {
    //   this.search = data;
    // })
    this.service.headersub.subscribe((data: any) => {
      this.header = data;
      console.log(this.header);
    })
    this.service.genericControllerJsonSubject.subscribe((data: any) => {
      this.physical = data;
      console.log(this.physical);
    })
    if (this.modules.length != 0){
      this.fetchData();
    }
    else
    {
      console.log(this.modules);
    }
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
