import { Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
  @Input() namevalue: string = "";
  @Output() message: EventEmitter<any> = new EventEmitter<any>();
  constructor(private service: DemoService) {
    // this.service.Namesub.subscribe((data:any)=>{
    //   this.name = data;
    //   console.log(this.name);
    // })
  }
  onClick() {
    console.log(this.namevalue);
    this.message.emit(this.namevalue);
    console.log("custom event")
  }
  ngOnInit() {
    console.log("ngOnInit is called");
  }
  ngOnChanges(change: SimpleChanges) {
    console.log("ngOnChanges is called");
    console.log(change);
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called")
  }
  ngAfterViewChecked() {
    console.log("ngAfterVeiwChecked called");
  }
  ngOnDestroy() {
    console.log("ngDestroy called")
  }
}
