import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinedSaleItem } from '@models/saleItem';
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

  getSale(id: number): void {
    var user: any;
    this.salesApiService.getSale(id).subscribe(async x => {
      user = x
      console.log(user);
    });
  }

  getSales(): void {
    this.salesApiService.getAllSales().subscribe((d: any) => {
      this.dataSource = d;
    })
  }


  deleteSale(id: number): void {
    this.salesApiService.deleteSale(id).subscribe(x => {
      this.getSales();
    })
  }

  editSale(element: JoinedSaleItem): void {
    let user: any;
    this.salesApiService.getSale(element.id).subscribe(x => {
      user = x;
      let newQuantity: number = Number(prompt("Enter new quantity"));
      user.quantity = newQuantity;
      this.salesApiService.editItem(element.id, user).subscribe(x => {
        this.getSales();
      })
    });
  }



}
