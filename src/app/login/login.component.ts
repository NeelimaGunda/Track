import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // username: any = "Neelima";
  // password: any = "Gunda";
  company: any;
  loader: boolean = false;
  constructor(private router: Router, private service: MainserviceService) {
    //  If the data for company is not available in the local storage, an API call will be initiated to fetch the data, 
    // and the retrieved data will be subscribed to.
    let cdata: any = localStorage.getItem('company');
    this.company = JSON.parse(cdata);
  }
  // validate() {
  //   console.log("Validating user data");
  //   // console.log(this.username, this.password);
  //   this.loader = true;
  //   // perform your logic here
  //   this.router.navigate(['/dashboard']);
  // }
  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',(Validators.required, Validators.minLength(6))),
    });
    // If companies length is equal to zero or null then it navigates to the Terminal component otherwise it calls the fetchdata() function .
    if (this.company == null || this.company.length == 0) {
      this.router.navigate(['']);
    }
    this.fetchData();
  }
  onSubmit(form: FormGroup) {
    console.log("Validating user data");
    console.log('Valid?', form.valid); // true or false
    console.log('Name', this.loginForm.value.name);
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }
  // function to make an API call to fetch the data of modules and subscribe to the retrieved data. 
  fetchData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsModules().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSModulesSub.next(data);
      this.loader = false;
    }, (err) => {
      console.log(err);
    })
  }
}
