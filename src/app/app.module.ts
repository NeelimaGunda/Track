import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { BinsComponent } from './bins/bins.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { SubmodulefilterPipe } from './submodulefilter.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { StockComponent } from './stock/stock.component';
import { BodyComponent } from './body/body.component';
import { BinPipe } from './bin.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ModulepipePipe } from './modulepipe.pipe';
import { ModuleComponent } from './module/module.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TerminalsetupComponent,
    PhysicalComponent,
    PhysicalcountComponent,
    ItemnoComponent,
    RfidComponent,
    DashboardComponent,
    GenericsubmoduleComponent,
    BarchartComponent,
    LinechartComponent,
    PiechartComponent,
    RadarComponent,
    DonutComponent,
    ChartsComponent,
    ChartjsComponent,
    InfoComponent,
    BinsComponent,
    SubmodulefilterPipe,
    StockComponent,
    BodyComponent,
    BinPipe,
    ModulepipePipe,
    ModuleComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
