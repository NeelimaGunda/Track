import { Component } from '@angular/core';
import { MainserviceService } from './mainservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'track';
  test: any;
  data: any = {
    labels: ["jan", "feb", "mar", "apr", "may", "jun",],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    },
    {
      label: 'My second Dataset',
      data: [45, 89, 60, 43, 55, 80, 40],
      backgroundColor: 'rgba(150, 70, 132, 0.2)',
      borderColor: 'rgb(150, 70, 132)',
      borderWidth: 1,
      fill: true,
      pointStyle: 'triangle'

    }]
  }
  constructor(private service: MainserviceService) {
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.service.listcode.next(this.data);
    console.log(this.service.list);
  }
  ngOnInit() {
    // this.fetchData();
  }
  // fetchData() {
  //   console.log("Calling fetch data in app component");
  //   this.service.fetchImsCompanies().subscribe((data: any) => {
  //     console.log("Finished fetching data in app component")
  //     this.service.iMSCompaniesSub.next(data);

  //   }, err => {
  //     console.log(err);

  //   })

  // }

}
