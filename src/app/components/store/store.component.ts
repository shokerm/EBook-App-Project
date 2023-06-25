import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemDialogComponent } from '@components/dialogs-components/delete-item-dialog-component/delete-item-dialog-component';
import { EditItemDialogComponent } from '@components/dialogs-components/edit-item-dialog-component/edit-item-dialog-component';
import { ErrorDialogComponent } from '@components/dialogs-components/error-dialog-component/error-dialog-component.component';
import { NewItemDialogComponent } from '@components/dialogs-components/new-item-dialog-component/new-item-dialog-component';
import { Item } from '@models/item';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { AuthService } from '@services/auth.service';
import { CartDataService } from '@services/cart-data.service';
import { ItemsApiService } from '@services/items-api.service';
import { StoredataService } from '@services/store-data.service';
import { BehaviorSubject, observable } from "rxjs";


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(public service: StoredataService, public cartService: CartDataService, public ItemsApiService: ItemsApiService, private dialog: MatDialog,
    private authService: AuthService) {
    if (this.authService.user) {
      this.currentUser = this.authService.user.authLevel
    }


  }

  ngOnInit(): void {
    this.getItems();
  }

  currentUser: any;
  isThisUserAuthorisedToEditItems() {
    if (this.currentUser === 2) {
      return true;
    } else {
      return false;
    }
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
      this.getItems();
    });


  }

  deleteItem(id: number): void {
    let dialogRef = this.dialog.open(DeleteItemDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (JSON.parse(data)) {
        this.ItemsApiService.deleteItem(id).subscribe(x => {
          this.getItems();
        }, err => {
          if (err) {
            this.dialog.closeAll();
            this.dialog.open(ErrorDialogComponent,
              {
                data: {
                  "header": "You have not authorized to pefroem this action",
                  "firstDialogLine": "Unfortunately, you don't have the authority to perform this action",
                  "secondDialogLine": "Please ask from the administrator to provide you the authorization."

                }
              });

          }
        });
      }

    })

  }

  addItem(): void {
    let dialogRef = this.dialog.open(NewItemDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getItems();
    });

  }
}
