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
  submodule: any = [];
  module: any = [];
  bodyHeight: any = 0;
  b: boolean = false;
  loader: boolean = false;
  selectedModule: any = "";
  physical: any;
  header: any;
  bind: any;
  search: any;
  body: any = { arrow: false, menu: false };
  constructor(private service: MainserviceService, private router: Router) {
     // Getting the height of the body.
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
     // Retrieving submodules data from the local storage.
    let cdata: any = localStorage.getItem('submodules');
    this.submodule = JSON.parse(cdata);
    console.log(this.submodule);
    this.service.iMSSubmodulesSub.subscribe((data: any) => {
      this.submodule = data;
    });
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
      for (let i = 0; i < this.submodule.length; i++) {
        if (this.submodule[i]['ModuleCode'] == this.service.moduleCode['Code']) {
          console.log(this.submodule[i]['Code']);
          this.menu.push(this.submodule[i]);
        }
      }
    }, (err) => {
      console.log(err);
    })
  }
  // function to display the form fields based on the Code.
  // here this function calls the sidenav function which is in the service layer.
  page1(a:any){
    this.service.sideNav(a);
    this.service.arraysub.next(true);
    this.router.navigate(['dashboard/physicalcount']);
  } 
}
