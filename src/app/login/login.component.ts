import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any = "Neelima";
  password:any = "Gunda";
  company:any;
  loader:boolean=false;
  constructor(private router:Router,private service:MainserviceService) {
    let cdata:any = localStorage.getItem('company');
    this.company = JSON.parse(cdata);
  }
  validate() {
    console.log("Validating user data");
    console.log(this.username,this.password);
    this.loader = true;
    // perform your logic here
    this.router.navigate(['/dashboard']);
  }
  // bodyHeight: any = 0;
  // constructor() {
  //   let height: any = document.getElementsByTagName('body')[0];
  //   console.log(height.offsetHeight);
  //   this.bodyHeight = height.offsetHeight;
  // }
  ngOnInit() {
    this.fetchData();
    if(this.company == null || this.company.length == 0){ // && this.stores!=null
      // console.log(this.companies[1]);
      this.router.navigate(['']);
    }
  }
  fetchData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsModules().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSModulesSub.next(data);
      this.loader = false;
      // this.fetchSubData();
    }, (err) => {
      console.log(err);
    })
  }
}
