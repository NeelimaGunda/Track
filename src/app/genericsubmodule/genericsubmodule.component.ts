import { Component } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genericsubmodule',
  templateUrl: './genericsubmodule.component.html',
  styleUrls: ['./genericsubmodule.component.css']
})
export class GenericsubmoduleComponent {
  menu: any[] = [];
  type: any = {};
  gmodule: any = [
    {
      "Id": 12,
      "ModuleCode": "INV",
      "Code": "PIC",
      "Name": "Physical Inventory Count",
      "Name2": "Phy. Inv. Count",
      "Description": "Perform inventory count",
      "Description2": "",
      "TrackingSequence": 7,
      "DisplaySequence": 1,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 19,
      "ModuleCode": "INV",
      "Code": "IPC",
      "Name": "Item Inquiry",
      "Name2": "Item Inquiry",
      "Description": "Search and view the details of an item.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 2,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 24,
      "ModuleCode": "INV",
      "Code": "IBC",
      "Name": "Bin Inquiry",
      "Name2": "Bin Inquiry",
      "Description": "Search and view the details of a bin.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 3,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 14,
      "ModuleCode": "INV",
      "Code": "NAD",
      "Name": "Negative Adjustment",
      "Name2": "Neg. Adj.",
      "Description": "Pass negative inventory adjustment",
      "Description2": "",
      "TrackingSequence": 9,
      "DisplaySequence": 4,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 13,
      "ModuleCode": "INV",
      "Code": "PAD",
      "Name": "Positive Adjustment",
      "Name2": "Pos. Adj.",
      "Description": "Pass positive inventory adjustment",
      "Description2": "",
      "TrackingSequence": 8,
      "DisplaySequence": 5,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 20,
      "ModuleCode": "INV",
      "Code": "SPC",
      "Name": "Shelf Price Check",
      "Name2": "Shelf Price Check",
      "Description": "Shelf price Check",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 6,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 21,
      "ModuleCode": "INV",
      "Code": "ILU",
      "Name": "Item Lookup",
      "Name2": "Item Lookup",
      "Description": "Search & view item properties.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 7,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 22,
      "ModuleCode": "PRN",
      "Code": "ILP",
      "Name": "Item Label Printing",
      "Name2": "Item Label Printing",
      "Description": "Print item label.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 1,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 23,
      "ModuleCode": "PRN",
      "Code": "SLP",
      "Name": "Shelf Label Printing",
      "Name2": "Shelf Label Printing",
      "Description": "Print shelf label.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 2,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 1,
      "ModuleCode": "PUR",
      "Code": "PRQ",
      "Name": "Purchase Requisition",
      "Name2": "Purch. Req.",
      "Description": "Request purchasing department to obtain item(s) from vendor(s).",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 1,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 2,
      "ModuleCode": "PUR",
      "Code": "LPO",
      "Name": "Local Purchase Order",
      "Name2": "Purch. Ord.",
      "Description": "Place an order for item(s) with related vendor.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 2,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 25,
      "ModuleCode": "PUR",
      "Code": "LPF",
      "Name": "Local Purchase Order (FOC)",
      "Name2": "Purch. Ordr. (FOC)",
      "Description": "Place an order for FOC item(s) with related vendor.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 3,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 3,
      "ModuleCode": "PUR",
      "Code": "PRN",
      "Name": "Purchase Receipt Note",
      "Name2": "Purch. Rcpt.",
      "Description": "Receive item(s) from a vendor.",
      "Description2": "",
      "TrackingSequence": 1,
      "DisplaySequence": 4,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 26,
      "ModuleCode": "PUR",
      "Code": "PRF",
      "Name": "Purchase Receipt Note (FOC)",
      "Name2": "Purch. Rcpt. (FOC)",
      "Description": "Receive FOC item(s) from a vendor.",
      "Description2": "",
      "TrackingSequence": 1,
      "DisplaySequence": 5,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 4,
      "ModuleCode": "PUR",
      "Code": "PRO",
      "Name": "Purchase Return Order",
      "Name2": "Purch. Ret.",
      "Description": "Return item(s) to a vendor.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 6,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 4,
      "ModuleCode": "PUR",
      "Code": "PRS",
      "Name": "Purchase Return Shipment",
      "Name2": "Purch. Ret. Shpt.",
      "Description": "Ship item(s) to a vendor.",
      "Description2": "",
      "TrackingSequence": 2,
      "DisplaySequence": 7,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 5,
      "ModuleCode": "PUR",
      "Code": "PRR",
      "Name": "Purchase Invoice Return",
      "Name2": "Purch. Inv. Ret.",
      "Description": "Return item(s) to a vendor by invoice.",
      "Description2": "",
      "TrackingSequence": 2,
      "DisplaySequence": 8,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 9,
      "ModuleCode": "SLS",
      "Code": "SOR",
      "Name": "Sales Order",
      "Name2": "Sales Ord.",
      "Description": "Issue order to a customer.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 1,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 31,
      "ModuleCode": "SLS",
      "Code": "SOS",
      "Name": "Sales Order Shipment",
      "Name2": "Sales Ord. Shpt.",
      "Description": "Ship order to a customer.",
      "Description2": "",
      "TrackingSequence": 5,
      "DisplaySequence": 2,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 10,
      "ModuleCode": "SLS",
      "Code": "SRO",
      "Name": "Sales Return Order",
      "Name2": "Sales Ret.",
      "Description": "Return item(s) from a customer.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 3,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 32,
      "ModuleCode": "SLS",
      "Code": "SRR",
      "Name": "Sales Return Receipt",
      "Name2": "Sales Ret.",
      "Description": "Receive item(s) from a customer.",
      "Description2": "",
      "TrackingSequence": 6,
      "DisplaySequence": 4,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 11,
      "ModuleCode": "SLS",
      "Code": "SSR",
      "Name": "Sales Invoice Return",
      "Name2": "Sales Inv. Ret",
      "Description": "Return item(s) from a customer by invoice.",
      "Description2": "",
      "TrackingSequence": 6,
      "DisplaySequence": 5,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 6,
      "ModuleCode": "STR",
      "Code": "STR",
      "Name": "Stock Transfer Request",
      "Name2": "Stock Trans. Req.",
      "Description": "Request item(s) from another store.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 1,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 7,
      "ModuleCode": "STR",
      "Code": "STO",
      "Name": "Stock Transfer Out",
      "Name2": "Stock Trans. Out",
      "Description": "Ship item(s) to a store.",
      "Description2": "",
      "TrackingSequence": 0,
      "DisplaySequence": 2,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 33,
      "ModuleCode": "STR",
      "Code": "STS",
      "Name": "Stock Transfer Shipment",
      "Name2": "Stock Trans. Shpt.",
      "Description": "Ship item(s) to a store.",
      "Description2": "",
      "TrackingSequence": 3,
      "DisplaySequence": 3,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 8,
      "ModuleCode": "STR",
      "Code": "STI",
      "Name": "Stock Transfer In",
      "Name2": "Stock Trans. In",
      "Description": "Receive item(s) from a store.",
      "Description2": "",
      "TrackingSequence": 4,
      "DisplaySequence": 4,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 27,
      "ModuleCode": "STR",
      "Code": "ICS",
      "Name": "Intercompany Shipment",
      "Name2": "Int. Shpt.",
      "Description": "Ship item(s) to a company.",
      "Description2": "",
      "TrackingSequence": 5,
      "DisplaySequence": 5,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 28,
      "ModuleCode": "STR",
      "Code": "ICR",
      "Name": "Intercompany Receipt",
      "Name2": "Int. Rcpt.",
      "Description": "Receive item(s) from a company.",
      "Description2": "",
      "TrackingSequence": 6,
      "DisplaySequence": 6,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 30,
      "ModuleCode": "SVC",
      "Code": "SVI",
      "Name": "Order Dispatch (Internal)",
      "Name2": "Ordr. Dispatch  (Int.)",
      "Description": "Order Dispatch(Internal)",
      "Description2": "",
      "TrackingSequence": 5,
      "DisplaySequence": 1,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 29,
      "ModuleCode": "SVC",
      "Code": "SVE",
      "Name": "Order Dispatch( External)",
      "Name2": "Ordr. Dispatch  (Ext.)",
      "Description": "Order Dispatch(External)",
      "Description2": "",
      "TrackingSequence": 5,
      "DisplaySequence": 2,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 34,
      "ModuleCode": "SVC",
      "Code": "SVC",
      "Name": "Order Closure (External)",
      "Name2": "Ordr. Closure  (Ext.)",
      "Description": "Order Closure (External)",
      "Description2": "",
      "TrackingSequence": 6,
      "DisplaySequence": 3,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 15,
      "ModuleCode": "WHS",
      "Code": "WHR",
      "Name": "Warehouse Receipt",
      "Name2": "Whse. Rcpt.",
      "Description": "Receive inbound item(s).",
      "Description2": "",
      "TrackingSequence": 10,
      "DisplaySequence": 1,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 17,
      "ModuleCode": "WHS",
      "Code": "WPA",
      "Name": "Warehouse Put-Away",
      "Name2": "Whse. Put-Away",
      "Description": "Move item(s) from receiving area to storage location.",
      "Description2": "",
      "TrackingSequence": 11,
      "DisplaySequence": 2,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 16,
      "ModuleCode": "WHS",
      "Code": "WPL",
      "Name": "Warehouse Picklist",
      "Name2": "Whse. Picklist",
      "Description": "Pick item(s) from storage location.",
      "Description2": "",
      "TrackingSequence": 11,
      "DisplaySequence": 3,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    },
    {
      "Id": 18,
      "ModuleCode": "WHS",
      "Code": "WHM",
      "Name": "Warehouse Movement",
      "Name2": "Whse. Mov.",
      "Description": "Move item(s) from one storage location to another.",
      "Description2": "",
      "TrackingSequence": 12,
      "DisplaySequence": 4,
      "ImageURLAddress": "",
      "Status": 0,
      "CreatedBy": "sysadmin",
      "CreatedDate": "1900-01-01T00:00:00",
      "UpdatedBy": "sysadmin",
      "UpdatedDate": "1900-01-01T00:00:00"
    }
  ];
  b: boolean = false;
  submodule: any = [];
  module: any = [];
  bodyHeight: any = 0;
  accordion: any = [];
  loader: boolean = false;
  selectedModule: any = "";
  physical: any;
  header: any;
  bind: any;
  search: any;
  // item: any;
  // neg: any;
  // pos: any;
  // shelf: any;
  look: any;
  body: any = { arrow: false, menu: false };
  constructor(private service: MainserviceService, private router: Router) {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    let cdata: any = localStorage.getItem('submodules');
    this.submodule = JSON.parse(cdata);
    console.log(this.submodule);
    this.service.iMSSubmodulesSub.subscribe((data: any) => {
      this.submodule = data;
    });
    // console.log(this.service.iMSSubmodules);
    // this.submodule = this.service.iMSSubmodules;

  }

  accor(moduleCode: any) {
    console.log(moduleCode);
    this.service.SubmodulesSub.next(moduleCode);
    this.selectedModule = moduleCode;
    this.accordion = this.submodule.filter((e: any) => e['ModuleCode'] == moduleCode);
  }
  ngOnInit() {
    this.module = this.service.iMSModules;
    console.log(this.module);
    console.log(this.service.moduleCode['Code']);
    this.type = this.service.moduleCode;
    console.log(this.service.moduleCode);
    if (this.submodule == null || this.submodule.length == 0) {
      this.router.navigate(['']);
      this.fetchData();
    }
    else {
      this.loader = false;
      for (let i = 0; i < this.submodule.length; i++) {
        if (this.submodule[i]['ModuleCode'] == this.service.moduleCode['Code']) {
          console.log(this.submodule[i]['Code']);
          this.menu.push(this.submodule[i]);
          // console.log(this.menu[i]);

        }
      }
    }
  }
  fetchData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsSubmodules().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSSubmodulesSub.next(data);
      this.loader = false;
      // console.log(this.service.iMSSubmodules);
      for (let i = 0; i < this.submodule.length; i++) {
        if (this.submodule[i]['ModuleCode'] == this.service.moduleCode['Code']) {
          console.log(this.submodule[i]['Code']);
          this.menu.push(this.submodule[i]);
          // console.log(this.menu);
        }
      }
    }, (err) => {
      console.log(err);
    })
  }
  page1(a:any){
    this.service.sideNav(a);
    this.service.arraysub.next(true);
    this.router.navigate(['dashboard/physicalcount']);
  }
  page(a: any) {
    this.service.bsub.next(false);
    this.service.asub.next(true);
    this.service.bodysub.next(this.body);
    console.log(this.service.b);
    console.log(a.Code);
    switch (a.Code) {
      // inventory
      case "PIC":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Bin: "Bluk", Unit: "Each", Description: "Camera", Variant: "34", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, load: true, Nav: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true, Reason: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        console.log(this.service.genericControllerJson);
        break;
      case "IPC":
        this.service.headersub.next(a.Name2);
        this.bind = { Barcode: "00012000002", Unit: "Each", Description: "Pc", Price: "1234.13", Measure: "sdf", Retail: "12345" };
        this.physical = { a: false, Item: true, mat: true, Barcode: true, Unit: false, Description: true, Measure: true, Price: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "IBC":
        this.service.headersub.next(a.Name2);
        this.bind = { Bin: "Bluk" };
        this.physical = { Bins: true, Bin: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "NAD":
        this.service.headersub.next(a.Name2);
        this.physical = { adj: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        break;
      case "PAD":
        this.service.headersub.next(a.Name2);
        this.physical = { adj: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        break;
      case "SPC":
        this.service.headersub.next(a.Name2);
        this.bind = { Barcode: "00012000002", Unit: "Each", Description: "Pc", Variant: "", Price: "1234.13", Reason: "" };
        this.physical = { link: true, shelf: true, Barcode: true, Unit: true, date: true, Description: true, Price: true, Variant: true, shelfPrice: true, Reason: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "ILU":
        this.service.headersub.next(a.Name2);
        this.physical = { Look: true, lookup: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        break;
      // purchase
      case "LPO":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "PRN":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "PRO":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "PRS":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "PRR":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;

      // sales
      case "SOR":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "SOS":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera", Variant: "ed", UnitPrice: "1234.13" };
        this.physical = { link: true, icon: true, data: true, download: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "SRO":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "SRR":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "SSR":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera", Reason: "ed", UnitPrice: "1234.13" };
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, UnitPrice: true, Reason: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      // service
      case "SVI":
        this.service.headersub.next(a.Name2);
        this.header = a.Name2;
        console.log(this.service.header);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera" };
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "SVE":
        this.service.headersub.next(a.Name2);
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        // this.service.bindsub.next(this.bind);
        break;
      case "SVC":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera", UnitPrice: "1234.13", Variant: "34" };
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      // store
      case "STR":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "STS":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "STO":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "ICS":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "STI":
        this.service.headersub.next(a.Name2);
        this.physical = { order: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        break;
      // warehouse
      case "WHM":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, place: true, Unit: true, Description: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "WPL":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "WPA":
        this.service.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;
      case "WHR":
        this.service.headersub.next(a.Name2);
        this.bind = { date: "", Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Barcode: true, date: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        this.service.bindsub.next(this.bind);
        break;

      default:
        this.service.headersub.next(a.Name2);
        this.physical = { order: true };
        this.service.genericControllerJsonSubject.next(this.physical);
        break;
    }
    this.router.navigate(['dashboard/physicalcount']);
  }
}
