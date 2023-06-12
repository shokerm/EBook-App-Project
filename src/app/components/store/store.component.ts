import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemDialogComponent } from '@components/dialogs-components/delete-item-dialog-component/delete-item-dialog-component';
import { EditItemDialogComponent } from '@components/dialogs-components/edit-item-dialog-component/edit-item-dialog-component';
import { NewItemDialogComponent } from '@components/dialogs-components/new-item-dialog-component/new-item-dialog-component';
import { Item } from '@models/item';
import { CartDataService } from '@services/cart-data.service';
import { ItemsApiService } from '@services/items-api.service';
import { StoredataService } from '@services/store-data.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(public service: StoredataService, public cartService: CartDataService, public ItemsApiService: ItemsApiService, private dialog: MatDialog) {

  }



  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.ItemsApiService.fetchItem().subscribe((x: object) => {
      this.Items = x;
    });
  }


  Items: any;

  changeLikeToggle(card: Item) {
    this.service.changeLikeToggleService(card);
  }

  addToCart(book: Item) {
    this.cartService.addToCartService(book);

  }

  bookQunatityAdd(book: Item) {
    this.cartService.bookQunatityAddService(book);
  }
  bookQunatityRemove(book: Item) {
    this.cartService.bookQunatityRemoveService(book);
  }

  editItem(id: number) {
    let dialogRef = this.dialog.open(EditItemDialogComponent, { autoFocus: true, data: { "id": id } });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });


  }

  deleteItem(id: number): void {
    let dialogRef = this.dialog.open(DeleteItemDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (JSON.parse(data)) {
        this.ItemsApiService.deleteItem(id).subscribe(x => {
          this.ngOnInit();
        });
      }

    })

  }

  addItem(): void {
    let dialogRef = this.dialog.open(NewItemDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }
}
