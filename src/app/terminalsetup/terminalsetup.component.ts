import { Component } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-terminalsetup',
  templateUrl: './terminalsetup.component.html',
  styleUrls: ['./terminalsetup.component.css']
})
export class TerminalsetupComponent {
  setupForm!: FormGroup;
  bodyHeight: any = 0;
  stores: any = [];
  companies: any = [];
  url: any = "";
  tnum: any = 1234;
  tname: any = "apnt";
  tcompany: any = "";
  tstore: any = "";
  loader: boolean = false;
  mySelectControl: any;
  urlError: boolean = false;
  constructor(private service: MainserviceService, private router: Router) {
    // Getting the height of the body.
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    this.url = this.service.preurl;
    // Retrieving company data from the local storage.
    let cdata: any = localStorage.getItem('company');
    if (cdata == null) {
      cdata = [];
      console.log(cdata);
    } else {
      this.companies = JSON.parse(cdata);
      console.log(this.companies);
    }
    // Retrieving store data from the local storage.
    let sdata: any = localStorage.getItem('store');
    if (sdata == null) {
      sdata = [];
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
    this.setupForm = new FormGroup({ // Reactive form group
      url: new FormControl('', [Validators.required]),
      company: new FormControl('',[Validators.required]),
      store: new FormControl('', [Validators.required]),
      terminalnumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[9|7|5]\\d{4}[A-Z]\\d{3}[A-Z]$')]),
      terminalname: new FormControl('apnt', [Validators.required])
    });
    // this.setupForm.valueChanges.subscribe((value) => {
    //   console.log('Form Valid:', this.setupForm.valid);
    //   console.log(this.setupForm.value);
    // });
    console.log("Calling init method in terminal setup");
    this.service.storesub.next(this.tstore);
    // If companies and stores length  is not equal to zero then it navigates to the login page.
    if (this.companies.length != 0 && this.stores.length != 0) {
      this.router.navigate(['/login']);
    }
  }
  // Method which is invoked when the form is submitted.
  Submit(form: FormGroup) {
    console.log('Valid?', form.valid); 
    console.log(this.setupForm.get('company')?.valid);
    console.log('Terminal Name:', this.setupForm.value.terminalname);
    console.log('Terminal Number:', this.setupForm.value.terminalnumber);
    console.log(this.setupForm.value);
    this.url = this.setupForm.get('url')?.value;
    console.log(this.url);
    this.tcompany = this.setupForm.get('company')?.value;
    console.log(this.tcompany);
    this.tstore = this.setupForm.get('store')?.value;
    console.log(this.tstore);
    this.service.turlcode.next(this.url);
    this.service.companysub.next(this.tcompany);
    this.service.storesub.next(this.tstore);
    this.router.navigate(['/login']);
  }
  // Method which is invoked when we press enter key after giving input to the url form field.
  onUrlSubmit() {
    if (this.setupForm.get('url')?.invalid) {
      return; // Do not proceed if URL field is invalid
    }
    this.url = this.setupForm.get('url')?.value;
    this.service.turlcode.next(this.url);
    console.log(this.url);
    if (!this.url || this.url.trim() === '') {
      this.urlError = false;
    }
    this.fetchData();
  }
  getCompanies(list: any) {
    console.log(list.value);
    this.fetchDataOne(list.value);
  }
  // function to make an API call to fetch the data of stores and subscribe to the retrieved data. 
  fetchDataOne(list: any) {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsStores(list).subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSStoresSub.next(data);
      this.loader = false;
      if (this.stores.length > 0) {
        const defaultStore = this.stores[1].Code; // Assuming the second option as the default value
        this.setupForm.get('store')?.setValue(defaultStore);
      }
    }, (err: any) => {
      console.log(err);
    })
  }
  // function to make an API call to fetch the data of companies and subscribe to the retrieved data. 
  fetchData() {
    console.log("Calling fetch data in app component");
    this.service.fetchImsCompanies().subscribe((data: any) => {
      this.urlError = false;
      console.log("Finished fetching data in app component")
      this.service.iMSCompaniesSub.next(data);
      if (this.companies.length > 0) {
        const defaultCompany = this.companies[1].Code; // Assuming the second option as the default value
        this.setupForm.get('company')?.setValue(defaultCompany);
        this.fetchDataOne(defaultCompany);
      }
    }, err => {
      if (err.status === 404) {
        this.urlError = true; // Handle 404 error and set error flag
      } else {
        console.log(err);
        this.urlError = false;
      }
    })
  }

}

