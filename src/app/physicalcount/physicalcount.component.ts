import { Component } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BinsComponent } from '../bins/bins.component';
@Component({
  selector: 'app-physicalcount',
  templateUrl: './physicalcount.component.html',
  styleUrls: ['./physicalcount.component.css']
})
export class PhysicalcountComponent {
  bindata: any =
    [{
      "Id": 64, "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "ADJUSTMENT",
      "Code": "W-11-0001",
      "Description": "",
      "Description2": "51178-EXCELLENCE HOT SAUCE3 OZ",
      "No": "W-11-0001",
      "Name": "W-11-0001",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "40.0/4.0/36.0",
      "Ranking": 0,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 65,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "ADJUSTMENT",
      "Code": "W-11-0002",
      "Description": "",
      "Description2": "71260-RUBY ROSE WATER 2LTR",
      "No": "W-11-0002",
      "Name": "W-11-0002",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "50.0/5.0/45.0",
      "Ranking": 0,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "", "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 25,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0001",
      "Description": "",
      "Description2": "78514-BROOKE BOND TEA BAGS",
      "No": "W-05-0001",
      "Name": "W-05-0001",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "60.0/6.0/56.0",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 26,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0002",
      "Description": "",
      "Description2": "390239-PANADOL ADVANCE",
      "No": "W-05-0002",
      "Name": "W-05-0002",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "40.0/4.0/36.0",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 27,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0003",
      "Description": "",
      "Description2": "390239-PANADOL ADVANCE",
      "No": "W-05-0003",
      "Name": "W-05-0003",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/1.0/6.0",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "", "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 28,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0004",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Description": "",
      "Description2": "32836-ELEC.CALCULATOR",
      "No": "W-05-0004",
      "Name": "W-05-0004",
      "Name2": "PC",
      "Qty": "20.0/2.0/18.0",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 29,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0005",
      "Description": "",
      "Description2": "32836-ELEC.CALCULATOR",
      "No": "W-05-0005",
      "Name": "W-05-0005",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/1.0/9.0",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 30,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0006",
      "Description": "",
      "Description2": "32836-ELEC.CALCULATOR",
      "No": "W-05-0006",
      "Name": "W-05-0006",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/1.0/6.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 31,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0007",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0007",
      "Name": "W-05-0007",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 32,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0008",
      "Description": "",
      "Description2": "390231-SAMSUNG 49'FHD SMART",
      "No": "W-05-0008",
      "Name": "W-05-0008",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 33,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0009",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0009",
      "Name": "W-05-0009",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 34,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0010",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0010",
      "Name": "W-05-0010",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 35,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0011",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0011",
      "Name": "W-05-0011",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 36,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0012",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0012",
      "Name": "W-05-0012",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 37,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0013",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0013",
      "Name": "W-05-0013",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 38,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0014",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0014",
      "Name": "W-05-0014",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 39,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0015",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0015",
      "Name": "W-05-0015",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 40,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0016",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0016",
      "Name": "W-05-0016",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 41,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0017",
      "Description": "",
      "Description2": "155339-ELECTRONIC KEY BOARD",
      "No": "W-05-0017",
      "Name": "W-05-0017",
      "ImageURLAddress": "http://93.177.125.95/aptintrack/Images/ic_inventory.png",
      "Name2": "PC",
      "Qty": "10.0/0.0/1.0",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00", "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    }
    ];
  accordion: any = [];
  modules: any = [];
  submodule: any = [];
  bincode: any =
    [{
      "Id": 64, "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "ADJUSTMENT",
      "Code": "W-11-0001",
      "Description": "",
      "Description2": "",
      "No": "W-11-0001",
      "Name": "W-11-0001",
      "Name2": "", "Ranking": 0,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 65,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "ADJUSTMENT",
      "Code": "W-11-0002",
      "Description": "",
      "Description2": "",
      "No": "W-11-0002",
      "Name": "W-11-0002",
      "Name2": "",
      "Ranking": 0,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "", "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 25,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0001",
      "Description": "",
      "Description2": "",
      "No": "W-05-0001",
      "Name": "W-05-0001",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 26,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0002",
      "Description": "",
      "Description2": "",
      "No": "W-05-0002",
      "Name": "W-05-0002",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 27,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0003",
      "Description": "",
      "Description2": "",
      "No": "W-05-0003",
      "Name": "W-05-0003",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "", "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 28,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0004",
      "Description": "",
      "Description2": "",
      "No": "W-05-0004",
      "Name": "W-05-0004",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 29,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0005",
      "Description": "",
      "Description2": "",
      "No": "W-05-0005",
      "Name": "W-05-0005",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 30,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0006",
      "Description": "",
      "Description2": "",
      "No": "W-05-0006",
      "Name": "W-05-0006",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 31,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0007",
      "Description": "",
      "Description2": "",
      "No": "W-05-0007",
      "Name": "W-05-0007",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 32,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0008",
      "Description": "",
      "Description2": "",
      "No": "W-05-0008",
      "Name": "W-05-0008",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 33,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0009",
      "Description": "",
      "Description2": "",
      "No": "W-05-0009",
      "Name": "W-05-0009",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 34,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0010",
      "Description": "",
      "Description2": "",
      "No": "W-05-0010",
      "Name": "W-05-0010",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 35,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0011",
      "Description": "",
      "Description2": "",
      "No": "W-05-0011",
      "Name": "W-05-0011",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 36,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0012",
      "Description": "",
      "Description2": "",
      "No": "W-05-0012",
      "Name": "W-05-0012",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 37,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0013",
      "Description": "",
      "Description2": "",
      "No": "W-05-0013",
      "Name": "W-05-0013",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 38,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0014",
      "Description": "",
      "Description2": "",
      "No": "W-05-0014",
      "Name": "W-05-0014",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 39,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0015",
      "Description": "",
      "Description2": "",
      "No": "W-05-0015",
      "Name": "W-05-0015",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 40,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0016",
      "Description": "",
      "Description2": "",
      "No": "W-05-0016",
      "Name": "W-05-0016",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 41,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0017",
      "Description": "",
      "Description2": "",
      "No": "W-05-0017",
      "Name": "W-05-0017",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00", "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    }
    ];
  bodyHeight: any = 0;
  quantity = 1.0;
  selectedDate: any = Date;
  stock: boolean = false;
  physical: any;
  header: any;
  bind: any;
  show = false;
  search = false;
  loader: boolean = false;
  bin: any;
  selectedModule: any;
  Search: any = "";
  find: any = "";
  a: any = true;
  text: any = "white";
  text1: any;
  text2: any;
  bgc: any = " rgb(37, 93, 166)";
  bgc1: any;
  bgc2: any;
  enter: any = "Enter an Item no.";
  constructor(private service: MainserviceService, private location: Location, private router: Router,private _bottomSheet: MatBottomSheet) {
    // Getting the height of the body.
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    console.log(this.service.genericControllerJson)
    this.physical = this.service.genericControllerJson;
    this.header = this.service.header;
    this.bind = this.service.bind;
    this.service.iMSBinsSub.subscribe((data: any) => {
      this.bin = data;
    });
    console.log(this.service.iMSBins);
    this.bin = this.service.iMSBins;
  }
  ngOnInit() {
    console.log(this.header);
  }
  // function to print the form fields data in the console when we click on the icon which is in the bottom of the page.
  onClick() {
    console.log(this.bind);
    let each = this.bind;
    Object.entries(each).forEach(([Key, value]) => {
      console.log(Key + ":" + value);
    });
  }
  onSubmit(data: NgForm) {       // function to print the form fields data in the console when we press the enter key.
    // console.log("Bin:"+data.target.value);
    console.log(data.value);
    let each = data.value;
    Object.entries(each).forEach(([Key, value]) => {
      console.log(Key + ":" + value);
    });
  }
  //  barcode form of physicalcount component(item inquiry).
  back() {
    this.physical = this.service.genericControllerJson;
    this.text1 = "";
    this.text = "white";
  }
  // barcode form of physicalcount component.
  Back() {
    this.physical = this.service.genericControllerJson;
    this.text1 = "";
    this.text2 = "";
    this.text = "white";
  }
  // itemno form of physicalcount component based on the Name the form fields may vary.
  submit(h: any) {
    this.text = "";
    this.text2 = "";
    this.text1 = "white";
    switch (h) {
      case 'Item Inquiry':
        this.physical = { Item: true, Itemno: true, Description: true, Measure: true, Price: true };
        break;
      case 'Whse. Mov.':
        this.physical = { Item: true, stock: true, Itemno: true, place: true, Unit: true, Description: true };
        break;
      case 'Whse. Picklist':
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Itemno: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        break;
      case 'Whse. Put-Away':
        this.physical = { data: true, download: true, Item: true, menu: true, Location: true, Itemno: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        break;
      case 'Whse. Rcpt.':
        this.physical = { data: true, download: true, Item: true, menu: true, Itemno: true, date: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        break;
      default:
        break;
    }
  }
  // itemno form of physicalcount component based on the Name the form fields may vary.
  itemno(name: any) {
    this.text = "";
    this.text1 = "white";
    switch (name) {
      case 'Phy. Inv. Count':
        this.physical = { link: true, stock: true, Itemno: true, Unit: true, Description: true, Variant: true, UnitPrice: true, Reason: true, icon: true };
        break;
      case 'Shelf Price Check':
        this.physical = { link: true, Nav: true, Itemno: true, Unit: true, date: true, Description: true, Price: true, Variant: true, shelfPrice: true, Reason: true };
        break;
      case 'Ordr. Dispatch  (Int.)':
        this.physical = { link: true, stock: true, Itemno: true, Unit: true, Description: true, Variant: true, icon: true };
        break;
      case 'Ordr. Dispatch  (Ext.)':
        this.physical = { link: true, stock: true, Itemno: true, Unit: true, Description: true, Variant: true, icon: true };
        break;
      case 'Ordr. Closure  (Ext.)':
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Itemno: true, Unit: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Sales Ord.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Sales Ord. Shpt.':
        this.physical = { link: true, icon: true, data: true, download: true, com: true, stock: true, Itemno: true, Unit: true, Description: true, Variant: true, UnitPrice: true };
        break;
      case 'Sales Ret.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        break;
      case 'Sales Inv. Ret':
        this.physical = { link: true, data: false, tab: true, download: true, icon: true, matorder: true, com: true, stock: true, Itemno: true, Unit: true, Description: true, UnitPrice: true, Reason: true };
        break;
      case 'Stock Trans. Req.':
        this.physical = { link: true, icon: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Stock Trans. Out':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Stock Trans. Shpt.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Int. Shpt.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Purch. Ord.':
        this.physical = { link: true, icon: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Purch. Rcpt.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Purch. Ret.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true };
        break;
      case 'Purch. Ret. Shpt.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        break;
      case 'Purch. Inv. Ret.':
        this.physical = { link: true, icon: true, stock: true, Itemno: true, Unit: true, date: true, Description: true, UnitPrice: true, Variant: true, Reason: true };
        break;
      default:
        break;
    }

  }
  //  rfid form of physicalcount component .
  rfid() {
    this.text = "";
    this.text1 = "";
    this.text2 = "white";
    this.physical = { link: true, rfid: true };

  }
  // Navigate to the bins component.
  bins() {
    // this.router.navigate(['/dashboard/bins']);
    this._bottomSheet.open(BinsComponent);
    // this.service.bsub.next(true);
    // this.service.asub.next(false);
    // this.service.arraysub.next(false);
    // this.service.genericControllerJsonSubject.next(this.physical = {});
  }
   // Navigate to the stock component.
  s() {
    this.router.navigate(['/dashboard/stock']);
    this.service.bsub.next(false);
    this.service.arraysub.next(false);
    this.service.asub.next(false);
    this.service.csub.next(true);
    this.service.genericControllerJsonSubject.next(this.physical = {});
  }
  // Navigate to the itemno component.
  itemLook() {
    this.router.navigate(['/dashboard/itemno']);
    this.service.bsub.next(false);
    this.service.asub.next(false);
    this.service.csub.next(true);
    this.service.genericControllerJsonSubject.next(this.physical = {});
  }
  // Navigate to the stock component.
  ellip() {
    this.router.navigate(['/dashboard/stock']);
    this.service.bsub.next(false);
    this.service.arraysub.next(false);
    this.service.asub.next(false);
    this.service.csub.next(false);
    this.service.dsub.next(true);
    this.service.genericControllerJsonSubject.next(this.physical = {});
  }
  description() {
    this.bgc = "";
    this.bgc1 = " rgb(37, 93, 166)";
    this.enter = "Enter a description";
  }
  barCode() {
    this.bgc = "";
    this.bgc1 = "";
    this.bgc2 = " rgb(37, 93, 166)";
    this.enter = "Scan/enter a barcode";
  }
  lookUp() {
    this.bgc = " rgb(37, 93, 166)";
    this.bgc1 = "";
    this.bgc2 = "";
    this.enter = "Enter an Item no.";
  }
  // function to increase the quantity count.
  increaseValue(): void {
    if (this.quantity < 5.0) {
      this.quantity += 1.0;
    }
  }
  // function to decrease the quantity count.
  decreaseValue(): void {
    if (this.quantity > 1.0) {
      this.quantity -= 1.0;
    }
  }
  // function to make an API call to fetch the data of Bins and subscribe to the retrieved data. 
  fetchData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsBins().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSBinsSub.next(data);
      this.loader = false;
    }, (err) => {
      console.log(err);

    })
  }
  
}
