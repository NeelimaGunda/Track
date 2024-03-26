import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  showPop:any = -1;
  long:boolean=false;
  quotationStatusFilterType: any = -1;
  tableStructure: any = [
    { id: "document_type", label: 'Subscription Info', width: "25%", key: "document_type", type: "text" },
    { id: "customer_name", label: 'Customer Info', width: "60%", key: "customer_name", type: "text" },
    // { id: "sales_person", label: 'Sales Person', width: "15%", key: "sales_person", type: "text" },
    { id: "net_payment", label: 'Net Payment', width: "15%", key: "amount_including_vat", type: "currency" },
    { id: "created_on", label: 'Updated On', width: "30%", key: "updated_at", type: "date" }
  ];
  custOrders: any = [  {

    "id": 1,

    "created_at": "2023-04-26T11:26:03.000000Z",

    "updated_at": "2023-04-26T11:26:03.000000Z",

    "user_id": "4",

    "document_type": "1676631464241",

    "sell_to_customer_no": "C0050",

    "no": "4",

    "order_date": "2023-03-23",

    "payment_terms_code": "ANNUALLY",

    "product_category_code": "ss",

    "subs_contract_type": "QUARTERLY",

    "period_start": "2023-04-13",

    "period_end": "2023-05-13",

    "transaction_status": "1",

    "tenant_id": 1,

    "purchase_order_number": "1",

    "description": "testing",

    "order_comments": "testing",

    "invoice_count": null,

    "channel": null,

    "sales_person": "Vishnu Vardhan",

    "subscription_category": "3",

    "difference_days": -35,

    "invoice_details": [

        {

            "id": 1,

            "created_at": "2023-03-21T12:32:54.000000Z",

            "updated_at": "2023-03-21T12:32:54.000000Z",

            "sales_header_no": "1",

            "customer_code": "C0001",

            "invoice_date": "2023-03-21",

            "invoice_amount": "300",

            "due_date": "2023-03-21",

            "invoice_status": "1",

            "invoice_number": "1",

            "next_invoice_date": "2023-03-21 12:32:54",

            "period_start_date": "2023-03-21 12:32:54",

            "period_end_date": "2023-03-21 12:32:54",

            "updated_by": "2023-03-21 12:32:54"

        }

    ],

    "customer_details": {

        "id": 50,

        "created_at": "2023-01-02T20:36:19.000000Z",

        "updated_at": "2023-01-17T00:12:06.000000Z",

        "sqlid": "C0050",

        "no": "C0050",

        "name": "Mahmood Mallik Int'l Gen.Trdg. Co. L.L.C.",

        "last_date_modified": "2018-08-27",

        "search_name": null,

        "address": {

            "id": 44,

            "created_at": "2023-04-14T05:39:30.000000Z",

            "updated_at": "2023-04-14T05:39:30.000000Z",

            "label": "MVP Office",

            "customer_id": "C0050",

            "country": "India",

            "first_name": "Chris",

            "last_name": "Nolan",

            "email_id": "chris.nolan@apntbs.com",

            "company": "AP&T",

            "phone": "+971509673646",

            "address_line_1": "Al Karama",

            "address_line_2": "Near Central PostOffice",

            "address_line_3": "Dubai City Center",

            "city": "Dubai",

            "postal_or_zip_code": "500001"

        },

        "city": null,

        "contact": null,

        "phone_number": null,

        "currency_code": "USD",

        "country_code": null,

        "email": null

    },

    "customer_name": "Mahmood Mallik Int'l Gen.Trdg. Co. L.L.C.",

    "details": [

        {

            "id": 5,

            "created_at": null,

            "updated_at": null,

            "document_type": "1676631464241",

            "document_no": "1",

            "line_no": "1",

            "type": "Item",

            "no": "7607-F602",

            "quantity": "12",

            "unit_price": "300",

            "amount": "3600",

            "amount_including_vat": "3600",

            "subscription_status": null,

            "line_status": "1",

            "created_by": 4,

            "updated_by": 4,

            "item_margin_group": "1",

            "cost_price": "1",

            "sell_to_customer_no": "C0050",

            "cust_target_unit_price": "1",

            "cust_target_sale_price": "1",

            "buy_from_vendor_no": "V0001",

            "vendor_target_unit_price": "1",

            "vendor_target_sale_price": "18",

            "item_desc": null,

            "description": null,

            "licenseInfo": []

        },

        {

            "id": 4,

            "created_at": null,

            "updated_at": null,

            "document_type": "1676631464241",

            "document_no": "1",

            "line_no": "1",

            "type": "Item",

            "no": "7607-F601",

            "quantity": "12",

            "unit_price": "200",

            "amount": "2400",

            "amount_including_vat": "2400",

            "subscription_status": null,

            "line_status": "1",

            "created_by": 4,

            "updated_by": 4,

            "item_margin_group": "1",

            "cost_price": "1",

            "sell_to_customer_no": "C0050",

            "cust_target_unit_price": "1",

            "cust_target_sale_price": "1",

            "buy_from_vendor_no": "V0001",

            "vendor_target_unit_price": "1",

            "vendor_target_sale_price": "18",

            "item_desc": null,

            "description": null,

            "licenseInfo": []

        },

        {

            "id": 3,

            "created_at": null,

            "updated_at": null,

            "document_type": "1676631464241",

            "document_no": "1",

            "line_no": "1",

            "type": "Item",

            "no": "7607-F600",

            "quantity": "12",

            "unit_price": "100",

            "amount": "1200",

            "amount_including_vat": "1200",

            "subscription_status": null,

            "line_status": "1",

            "created_by": 4,

            "updated_by": 4,

            "item_margin_group": "1",

            "cost_price": "1",

            "sell_to_customer_no": "C0050",

            "cust_target_unit_price": "1",

            "cust_target_sale_price": "1",

            "buy_from_vendor_no": "V0001",

            "vendor_target_unit_price": "1",

            "vendor_target_sale_price": "18",

            "item_desc": "XR8 STANDARD SINGLE PACK",

            "description": "D365 Subscriptions",

            "licenseInfo": []

        }

    ],

    "amount_including_vat": 7200

}];
onLongPress() {
    // Long press logic goes here
    this.long=true;
    console.log('Long press event occurred!');
  }
}
// let key = Object.keys(this.custOrders)[0];
// Object.entries(this.custOrders).forEach(([Key, value]) => {
//   console.log('foreach');
//   console.log(Key);
//   console.log(this.custOrders[key]['invoice_header']);
// });