import { Component } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-terminalsetup',
  templateUrl: './terminalsetup.component.html',
  styleUrls: ['./terminalsetup.component.css']
})
export class TerminalsetupComponent {
  bodyHeight: any = 0;
  stores: any = [];
  companies: any = [];
  url: any;
  tnum: any = 1234;
  tname: any = "apnt";
  tcompany: any = "";
  tstore: any = "";
  loader:boolean = false;
  mySelectControl:any;
  constructor(private service: MainserviceService, private router: Router) {
    // Getting the height of the body.
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    this.url = this.service.preurl;
    // Retrieving company data from the local storage.
    let cdata:any = localStorage.getItem('company');
    if (cdata==null) {
      cdata=[];
      console.log(cdata);
    } else {
      this.companies = JSON.parse(cdata);
      console.log(this.companies);
    }
    // Retrieving store data from the local storage.
    let sdata:any = localStorage.getItem('store');
    if (sdata==null) {
      sdata=[];
      console.log(sdata);
    } else {
     this.stores = JSON.parse(sdata);
      console.log(this.stores);
    }
    //  If the data for company is not available in the local storage, an API call will be initiated to fetch the data, 
    // and the retrieved data will be subscribed to.
    this.service.iMSCompaniesSub.subscribe((data: any) => {
      this.companies = data;
      console.log(this.companies);
    });
    //  If the data for stores is not available in the local storage, an API call will be initiated to fetch the data, 
    // and the retrieved data will be subscribed to.
    this.service.iMSStoresSub.subscribe((data: any) => {
      this.stores = data;
      console.log(this.stores);
    });
  }
  ngOnInit() {
    console.log("Calling init method in terminal setup");
    this.service.companysub.next(this.tcompany);
    console.log(this.service.company);
    this.service.storesub.next(this.tstore);
    console.log(this.service.store);
    // If companies length is not equal to zero then it navigates to the login page otherwise it calls the fetchdata() function .
    if(this.companies.length != 0 ){
      console.log(this.companies[1]);
      this.router.navigate(['/login']);
    }
    else
    this.fetchData();
  }
  // Printing the terminal setup form data in login component console.
  onclick() {
    this.router.navigate(['/login']);
    this.service.turlcode.next(this.url);
    console.log(this.service.turl);
    this.service.companysub.next(this.tcompany);
    console.log(this.service.company);
    this.service.storesub.next(this.tstore);
    console.log(this.service.store);
    this.service.terminalnumsub.next(this.tnum);
    console.log(this.service.terminalnum);
    this.service.terminalnamesub.next(this.tname);
    console.log(this.service.terminalname);
  }

  getCompanies(list: any) {
    console.log(list);
    this.fetchData1(list.target.value);
  }
  // function to make an API call to fetch the data of stores and subscribe to the retrieved data. 
  fetchData1(list: any) {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsStores(list).subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSStoresSub.next(data);
      this.loader = false;
    }, (err: any) => {
      console.log(err);
    })
  }
  // function to make an API call to fetch the data of companies and subscribe to the retrieved data. 
  fetchData() {
    console.log("Calling fetch data in app component");
    this.service.fetchImsCompanies().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSCompaniesSub.next(data);
    }, err => {
      console.log(err);
      
    })
  }
}
