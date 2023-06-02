import { Component, SimpleChanges, Input } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
@Input()namevalue:string="";
constructor(private service:DemoService){
  // this.service.Namesub.subscribe((data:any)=>{
  //   this.name = data;
  //   console.log(this.name);
  // })
}
ngOnInit(){
  console.log("ngOnInit is called");
}
ngOnChanges(change:SimpleChanges){
console.log("ngonchanges is called");
console.log(change);
}
ngDoCheck(){
  console.log("ngdocheck")
}
ngAfterContentInit(){
  console.log("ngAftercontentinit");
}
ngAfterContentChecked(){
  console.log("ngcontentchecked");
}
ngAfterViewInit(){
  console.log("view init called")
}
ngAfterViewChecked(){
  console.log("view checked");
}
ngOnDestroy(){
  console.log("ng destroy called")
}
}
