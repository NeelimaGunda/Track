import { Component } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
  value: any = "abcd";
  change(){
    console.log(this.value);
  }
}
