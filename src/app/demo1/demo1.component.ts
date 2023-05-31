import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
name:any;
constructor(private service:DemoService){
  this.service.Namesub.subscribe((data:any)=>{
    this.name = data;
    console.log(this.name);
  })
}
}
