import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  store: any;
  storesub: any = new Subject();
  search: any;
  searchsub: any = new Subject();
  b: any;
  bsub: any = new Subject();
  d: any;
  dsub: any = new Subject();
  body: any;
  bodysub: any = new Subject();
  dash: any;
  dashsub: any = new Subject();
  a: any;
  asub: any = new Subject();
  array: any;
  arraysub: any = new Subject();
  c: any;
  csub: any = new Subject();
  bind: any;
  bindsub: any = new Subject();
  physical: any;
  physicalsub: any = new Subject();
  header: any;
  headersub: any = new Subject();
  company: any;
  companysub: any = new Subject();
  terminalname: any;
  terminalnamesub: any = new Subject();
  terminalnum: any;
  terminalnumsub: any = new Subject();
  turl: any;
  turlcode: any = new Subject();
  list: any = "";
  listcode: any = new Subject();
  moduleCode: any = "";
  moduleCodeSub: any = new Subject();
  chart: any = "";
  chartcode: any = new Subject();
  preurl: any = "http://93.177.125.95/aptintrack/";
  endPoint: any = {
    "getimscompanies": "GetIMSCompanies",
    "getimsstores": "GetIMSStores",
    "getimsmodules": "GetIMSModules",
    "getimssubmodules": "GetIMSSubmodules",
    "getimsbins": "GetIMSBins"
  };
  iMSStores: any = [];
  iMSStoresSub: any = new Subject();
  iMSModules: any = [];
  iMSModulesSub: any = new Subject();
  iMSSubmodules: any = [];
  iMSSubmodulesSub: any = new Subject();
  Submodules: any = [];
  SubmodulesSub: any = new Subject();
  iMSCompanies: any = [];
  iMSCompaniesSub: any = new Subject();
  iMSBins: any = [];
  iMSBinsSub: any = new Subject();
  genericControllerJson: any = {};
  genericControllerJsonSubject: any = new Subject();
  constructor(private http: HttpClient) {
    // this.getdata();
    this.genericControllerJsonSubject.subscribe((data: any) => {
      console.log("coming to service in the future IMS Companies subject");
      this.genericControllerJson = data;
    });
    this.iMSCompaniesSub.subscribe((data: any) => {
      console.log("coming to service in the future IMS Companies subject");
      this.iMSCompanies = data;
      // Setting the data of imsComapnies in the Local Storage with the key name company.
      localStorage.setItem('company', JSON.stringify(this.iMSCompanies));
    });
    this.iMSStoresSub.subscribe((data: any) => {
      console.log("coming to service in the future IMS stores subject");
      this.iMSStores = data;
      // Setting the data of imsStores in the Local Storage with the key name store.
      localStorage.setItem('store', JSON.stringify(this.iMSStores));
    });
    this.iMSBinsSub.subscribe((data: any) => {
      console.log("coming to service in the future IMS bins subject");
      this.iMSBins = data;
      // Setting the data of imsBins in the Local Storage with the key name bins.
      localStorage.setItem('bins', JSON.stringify(this.iMSBins));
    });
    this.iMSModulesSub.subscribe((data: any) => {
      console.log("coming to service in the future IMS modules subject");
      this.iMSModules = data;
      // Setting the data of imsModules in the Local Storage with the key name modules.
      localStorage.setItem('modules', JSON.stringify(this.iMSModules));
    });
    this.iMSSubmodulesSub.subscribe((data: any) => {
      console.log("coming to service in the future IMS submodules subject");
      this.iMSSubmodules = data;
      // Setting the data of imsSubmodules in the Local Storage with the key name submodules.
      localStorage.setItem('submodules', JSON.stringify(this.iMSSubmodules));
    });
    this.SubmodulesSub.subscribe((data: any) => {
      this.Submodules = data;
    });
    this.storesub.subscribe((data: any) => {
      this.store = data;
    });
    this.searchsub.subscribe((data: any) => {
      this.search = data;
      console.log(this.search);
    });
    this.bindsub.subscribe((data: any) => {
      this.bind = data;
    });
    this.arraysub.subscribe((data: any) => {
      this.array = data;
    });
    this.bsub.subscribe((data: any) => {
      this.b = data;
      console.log(this.b);
    });
    this.dashsub.subscribe((data: any) => {
      this.dash = data;
      console.log(this.dash);
    });
    this.bodysub.subscribe((data: any) => {
      this.body = data;
      console.log(this.body);
    });
    this.asub.subscribe((data: any) => {
      this.a = data;
      console.log(this.a);
    });
    this.dsub.subscribe((data: any) => {
      this.d = data;
      console.log(this.d);
    });
    this.csub.subscribe((data: any) => {
      this.c = data;
      console.log(this.c);
    });
    this.headersub.subscribe((data: any) => {
      this.header = data;
    });
    this.companysub.subscribe((data: any) => {
      this.company = data;
    });
    this.turlcode.subscribe((data: any) => {
      this.turl = data;
    });
    this.terminalnamesub.subscribe((data: any) => {
      this.terminalname = data;
    });
    this.terminalnumsub.subscribe((data: any) => {
      this.terminalnum = data;
    });
    this.moduleCodeSub.subscribe((data: any) => {
      this.moduleCode = data;
    });
    this.chartcode.subscribe((data: any) => {
      this.chart = data;
    });
    this.listcode.subscribe((data: any) => {
      this.list = data;
    });
  }
  page(chartype: any) {
    try {
      if (this.chart) this.chart.destroy();
    }
    catch (error) {

    }
    this.chart = new Chart("chartholder", {
      type: chartype.toLowerCase(),
      data: this.list,
      options: {
        animations: {
          tension: {
            duration: 1000,
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            type: 'linear',
            display: true,
            position: 'left'
          }
        },
        plugins: {
          title: {
            display: true,
            text: chartype + ' Chart'
          }
        }
      }
    })
  }
  // getdata(){
  //   console.log('update data');
  //   const existingData:any =localStorage.getItem('company');
  //       this.iMSCompanies = JSON.parse(existingData);
  //      this.http.get(this.preurl + this.endPoint['getimscompanies']).subscribe((newData) => {
  //       if (JSON.stringify(newData) !== JSON.stringify(existingData)) {
  //         // Update the data in local storage if it is different from the new data
  //         localStorage.setItem('company', JSON.stringify(newData));
  //       }
  //      });
  // }
  sideNav(a: any) {
    console.log(a);
    this.bsub.next(false);
    this.asub.next(true);
    this.bodysub.next(this.body = { arrow: false, menu: false })
    console.log(a.Code);
    switch (a.Code) {
      // inventory
      case "PIC":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Bin: "Bluk", Unit: "Each", Description: "Camera", Variant: "34", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, load: true, Nav: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true, Reason: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        // console.log(this.genericControllerJson);
        break;
      case "IPC":
        this.headersub.next(a.Name2);
        this.bind = { Barcode: "00012000002", Unit: "Each", Description: "Pc", Price: "1234.13", Measure: "sdf", Retail: "12345" };
        this.physical = { a: false, Item: true, mat: true, Barcode: true, Unit: false, Description: true, Measure: true, Price: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "IBC":
        this.headersub.next(a.Name2);
        this.bind = { Bin: "Bluk" };
        this.physical = { Bins: true, Bin: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "NAD":
        this.headersub.next(a.Name2);
        this.physical = { adj: true };
        this.genericControllerJsonSubject.next(this.physical);
        break;
      case "PAD":
        this.headersub.next(a.Name2);
        this.physical = { adj: true };
        this.genericControllerJsonSubject.next(this.physical);
        break;
      case "SPC":
        this.headersub.next(a.Name2);
        this.bind = { Barcode: "00012000002", Unit: "Each", Description: "Pc", Variant: "", Price: "1234.13", Reason: "" };
        this.physical = { link: true, shelf: true, Barcode: true, Unit: true, date: true, Description: true, Price: true, Variant: true, shelfPrice: true, Reason: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "ILU":
        this.headersub.next(a.Name2);
        this.physical = { Look: true, lookup: true };
        this.genericControllerJsonSubject.next(this.physical);
        break;
      // purchase
      case "LPO":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "PRN":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "PRO":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "PRS":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "PRR":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;

      // sales
      case "SOR":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "SOS":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera", Variant: "ed", UnitPrice: "1234.13" };
        this.physical = { link: true, icon: true, data: true, download: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "SRO":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "SRR":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "SSR":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera", Reason: "ed", UnitPrice: "1234.13" };
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, UnitPrice: true, Reason: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      // service
      case "SVI":
        this.headersub.next(a.Name2);
        this.header = a.Name2;
        // console.log(this.header);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera" };
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "SVE":
        this.headersub.next(a.Name2);
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "SVC":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Unit: "Each", Description: "Camera", UnitPrice: "1234.13", Variant: "34" };
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Barcode: true, Unit: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      // store
      case "STR":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "STS":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "STO":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "ICS":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { link: true, icon: true, stock: true, Barcode: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "STI":
        this.headersub.next(a.Name2);
        this.physical = { order: true };
        this.genericControllerJsonSubject.next(this.physical);
        break;
      // warehouse
      case "WHM":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, place: true, Unit: true, Description: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "WPL":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "WPA":
        this.headersub.next(a.Name2);
        this.bind = { Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Barcode: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;
      case "WHR":
        this.headersub.next(a.Name2);
        this.bind = { date: "", Stock: "Bluk", Barcode: "00012000002", Place: "Bluk", Unit: "Each", Description: "Pc", Variant: "dfg", UnitPrice: "1234.13", Price: "1234.13", Reason: "sdf" };
        this.physical = { data: true, download: true, Item: true, menu: true, Barcode: true, date: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        this.genericControllerJsonSubject.next(this.physical);
        // this.bindsub.next(this.bind);
        break;

      default:
        this.headersub.next(a.Name2);
        this.physical = { order: true };
        this.genericControllerJsonSubject.next(this.physical);
        break;
    }

  }
  // function to  make an API call to retrive the companies data
  fetchImsCompanies() {
    return this.http.get(this.turl + this.endPoint['getimscompanies']);
  }
  // function to  make an API call to retrive the stores data
  fetchImsStores(code: any) {
    return this.http.get(this.turl + this.endPoint['getimsstores'] + '/' + code);
  }
  // function to  make an API call to retrive the modules data
  fetchImsModules() {
    return this.http.get(this.turl + this.endPoint['getimsmodules'] + '/' + "?companyStoreFilter.companyCode=" + this.company + "&companyStoreFilter.storeCode=" + this.store);
  }
  // function to  make an API call to retrive the submodules data
  fetchImsSubmodules() {
    return this.http.get(this.turl + this.endPoint['getimssubmodules'] + '/' + "?companyStoreFilter.companyCode=" + this.company + "&companyStoreFilter.storeCode=" + this.store);
  }
  // function to  make an API call to retrive the bins data
  fetchImsBins() {
    return this.http.get(this.turl + this.endPoint['getimsbins'] + '/' + "?companyStoreFilter.companyCode=" + this.company + "&companyStoreFilter.storeCode=" + this.store);
  }

}
