import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  Name: any;
  Namesub: any = new Subject();
  constructor() {
    this.Namesub.subscribe((data:any)=>{
      this.Name = data;
      console.log(this.Name);
    })
   }
}
