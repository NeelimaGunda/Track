import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  name: any = "";
  destroy:boolean=true;
  event:boolean=false;
  constructor(private service: DemoService, private router: Router) {

  }
  // myObservable =  Observable.create((observer:any) => {
  //   observer.next('1');
  //   observer.next('2');
  //   observer.next('3');
  //   setTimeout(()=>{ observer.next('4')},1000);
  //   // observer.error(new Error("error"));
  //   // observer.complete();
  // });
   ngOnInit() {
    // this.myObservable.subscribe((val:any) => {
    //   console.log(val);
    // }, (error:any) => {
    //   alert(error.message);
    // }, () => {
    //   alert("completed");
    // })
  }
  onSubmit(inputEl:HTMLInputElement) {
    console.log(this.name);
    this.name = inputEl.value;
    this.service.onSubmit();
    // this.service.Namesub.next(this.name);
    // this.router.navigate(['/demo/demo1']);
  }
  submit(event:any){
    console.log(event);
    console.log("custom event");
    this.event=true;
  }
  // printFormData() {
  //   console.log(this.name);
  //   this.service.Namesub.next(this.name);
  // }
  onDestroy(){
    this.destroy = false;
  }
}
