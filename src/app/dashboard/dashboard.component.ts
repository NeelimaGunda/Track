import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  modules: any = [];
  submodule: any = [];
  accordion: any = [];
  type: any = [];
  bodyHeight: any = 0;
  img: any = "url('../../assets/background.png')";
  url: any;
  a = false;
  b = false;
  c = false;
  d = false;
  array = false;
  loader: boolean = false;
  show = false;
  sidearrow = false;
  pagination = false;
  search: any = "";
  header: any = "";
  selectedModule: any = "";
  body: any = { arrow: false, menu: false };
  dash: any = { nav: true, name: true, module: true, ellips: true }
  nav: boolean = true;
  physical: any = {};
  constructor(private router: Router, private location: Location, private service: MainserviceService, private route: ActivatedRoute) {
    // Getting the height of the body.
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    // Retrieving modules data from the local storage.
    let cdata: any = localStorage.getItem('modules');
    this.modules = JSON.parse(cdata);
    console.log(this.modules);
    // Retrieving submodules data from the local storage.
    let data: any = localStorage.getItem('submodules');
    this.submodule = JSON.parse(data);
    console.log(this.submodule);
    //  If the data for modules is not available in the local storage, an API call will be initiated to fetch the data, 
    // and the retrieved data will be subscribed to.
    this.service.iMSModulesSub.subscribe((data: any) => {
      this.modules = data;
    });
    console.log(this.service.iMSModules);
    //  If the data for submodules is not available in the local storage, an API call will be initiated to fetch the data, 
    // and the retrieved data will be subscribed to.
    this.service.iMSSubmodulesSub.subscribe((data: any) => {
      this.submodule = data;
    })
    console.log(this.service.iMSSubmodules);
  }
  // Navigating back to the Dashboard component from the GModule component.
  back() {
    this.a = false;
    this.body = { arrow: false, menu: false };
    this.dash = { nav: true, bar: true, name: true, module: true, ellips: true };
    this.nav = true;
    this.router.navigate(['/dashboard']);
  }
  // Navigating back to the Gmodule component from the physicalcount component.
  goBack() {
    this.location.back();
    this.service.arraysub.next(false);
    this.service.asub.next(false);
    this.service.bodysub.next(this.body = { arrow: true, menu: true });
    this.service.genericControllerJsonSubject.next(this.physical = {});
  }
  // Navigating back to the Physicalcount(Bin Inquiry) component from the Bins component.
  return() {
    this.location.back();
    this.array = true;
    this.service.bsub.next(false);
    this.service.asub.next(true);
    this.service.genericControllerJsonSubject.next(this.physical = { Bins: true, Bin: true });

  }
  // Navigating back to the Physicalcount component from the Stock component.
  toggle() {
    this.location.back();
    this.array = true;
    this.service.csub.next(false);
    this.service.asub.next(true);
    this.physical = { link: true, icon: true, load: true, Nav: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true, Reason: true };
    this.service.genericControllerJsonSubject.next(this.physical);
  }
  // Navigating back to the Physicalcount(Warehouse) component from the Stock component.
  draw() {
    this.location.back();
    this.array = true;
    this.service.dsub.next(false);
    this.service.asub.next(true);
    this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, place: true, Unit: true, Description: true };
    this.service.genericControllerJsonSubject.next(this.physical);
  }
  // method to filter the data of the submodule 
  page(moduleCode: any) {
    console.log(moduleCode);
    this.service.SubmodulesSub.next(moduleCode);
    this.selectedModule = moduleCode;
    this.accordion = this.submodule.filter((e: any) => e['ModuleCode'] == moduleCode);
    console.log(this.accordion);
  }
  // Navigate to the Physical Count component from the side navigation in the Dashboard component.
  sideNav(list: any) {
    this.sidearrow = true;
    this.dash = { nav: false, name: false, module: false, ellips: false }
    this.service.sideNav(list);
    this.router.navigate(['dashboard/physicalcount']);
  }
  // Navigating back to the Dashboard component from the physicalcount component.
  Nav() {
    this.router.navigate(['/dashboard']);
    // this.location.back();
    this.sidearrow = false;
    this.dash = { nav: true, name: true, module: true, ellips: true };
    this.service.asub.next(false);
    this.service.genericControllerJsonSubject.next(this.physical = {});

  }
  pagination1(){
    this.pagination=true;
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
    this.service.headersub.subscribe((data: any) => {
      this.header = data;
      console.log(this.header);
    })
    this.service.genericControllerJsonSubject.subscribe((data: any) => {
      this.physical = data;
      console.log(this.physical);
    })
    console.log(this.modules);
    if (this.modules.length != 0) {
      this.fetchData();
    }
    else {
      console.log(this.modules);
    }
  }
  // function to make an API call to fetch the data of modules and subscribe to the retrieved data. 
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
  // function to make an API call to fetch the data of submodules and subscribe to the retrieved data. 
  fetchSubData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsSubmodules().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSSubmodulesSub.next(data);
      this.loader = false;
      this.fetchData1();
    }, (err) => {
      console.log(err);
    })
  }
  fetchData1() {
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
