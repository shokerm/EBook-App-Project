import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaleItem } from '@models/saleItem';
import { ItemsApiService } from '@services/items-api.service';
import { SalesApiService } from '@services/sales-api.service';



@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  constructor(private salesApiService: SalesApiService, private itemsApiService: ItemsApiService, private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'product', 'userId', 'itemId', 'quantity', 'saleDate', 'edit', 'delete'];
  dataSource: any


  ngOnInit(): void {
    this.getSales();

  }

  getSales() {
    this.salesApiService.getAllSales().subscribe((d: any) => {
      this.dataSource = d;
    })

  }


  deleteSale(id: number) {
    this.salesApiService.deleteSale(id).subscribe(x => {
      this.getSales();

    })
  }

  editSale(element: any) {
    console.log(element);
    let e = element;
    let newQuantity = prompt("Enter new quantity");
    e.quantity = newQuantity;
    this.salesApiService.editItem(element.id, e).subscribe(x => {
      this.getSales();
    })






  }



}
