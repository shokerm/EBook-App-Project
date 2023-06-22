import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinedSaleItem } from '@app/interfaces/saleItem';
import { AuthService } from '@services/auth.service';
import { ItemsApiService } from '@services/items-api.service';
import { SalesApiService } from '@services/sales-api.service';



@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  constructor(private salesApiService: SalesApiService, private itemsApiService: ItemsApiService, private dialog: MatDialog,
    private authService: AuthService
  ) { }

  displayedColumns: string[] = ['id', 'product', 'userId', 'itemId', 'quantity', 'saleDate', 'edit', 'delete'];
  dataSource: any


  ngOnInit(): void {
    this.getSales();
    console.log(this.authService.user);


  }

  getSales(): void {
    this.salesApiService.getAllSales().subscribe((data: any) => {
      switch (this.authService.user.authLevel) {
        case 0:
          break;
        case 1:
          let fillterdDataSourceForUser = data.filter((x: any) => x.userId === this.authService.user.id)
          this.dataSource = fillterdDataSourceForUser;
          break;
        case 2:
          this.dataSource = data;
          break;
        default:
          console.log("eror");
      }
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
