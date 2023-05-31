import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TerminalsetupComponent } from './terminalsetup/terminalsetup.component';
import { PhysicalComponent } from './physical/physical.component';
import { PhysicalcountComponent } from './physicalcount/physicalcount.component';
import { ItemnoComponent } from './itemno/itemno.component';
import { RfidComponent } from './rfid/rfid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericsubmoduleComponent } from './genericsubmodule/genericsubmodule.component';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RadarComponent } from './radar/radar.component';
import { DonutComponent } from './donut/donut.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { InfoComponent } from './info/info.component';
import { BinsComponent } from './bins/bins.component';
import { StockComponent } from './stock/stock.component';
import { BodyComponent } from './body/body.component';
import { ModuleComponent } from './module/module.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';


const routes: Routes = [
  { path: "", component: TerminalsetupComponent },
  { path: "login", component: LoginComponent },
  { path: "info", component: InfoComponent },
  { path: "module", component: ModuleComponent },
  { path: "physical", component: PhysicalComponent },
  // { path: "physicalcount", component: PhysicalcountComponent},
  { path: "itemno", component: ItemnoComponent },
  { path: "rfid", component: RfidComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "", component: BodyComponent },
      { path: "gmodule", component: GenericsubmoduleComponent },
      { path: "physicalcount", component: PhysicalcountComponent },
      { path: "bins", component: BinsComponent },
      { path: "stock", component: StockComponent },
      { path: "itemno", component: ItemnoComponent }
    ]
  },
  { path: "gmodule", component: GenericsubmoduleComponent },
  { path: "barchart", component: BarchartComponent },
  { path: "linechart", component: LinechartComponent },
  { path: "piechart", component: PiechartComponent },
  { path: "radar", component: RadarComponent },
  { path: "donut", component: DonutComponent },
  {
    path: "charts", component: ChartsComponent,
    children: [
      { path: "barchart", component: BarchartComponent },
      { path: "linechart", component: LinechartComponent },
      { path: "piechart", component: PiechartComponent }
    ]
  },
  { path: "chartjs", component: ChartjsComponent },
  { path: "bins", component: BinsComponent },
  { path: "bins", component: BinsComponent },
  { path: "stock", component: StockComponent },
  { path: "body", component: BodyComponent },
  {
    path: "demo", component: DemoComponent,
    children: [
      { path: "demo1", component: Demo1Component }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
