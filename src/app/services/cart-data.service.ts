import { Injectable } from '@angular/core';
import { Item } from '@models/item';
import { MatDialog } from '@angular/material/dialog';
import { ItemInCartDialogComponent } from '@components/dialogs-components/item-in-cart-dialog-component/item-in-cart-dialog';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor(public dialog: MatDialog) { }

  cart: Item[] = [];



  removeItemService(book: Item): void {
    let index = this.cart.findIndex(b => b.id === book.id);
    this.cart.splice(index, 1);
  }

  addToCartService(book: Item): void {
    let index = this.cart.findIndex(b => b.id === book.id);
    index > -1 ? this.dialog.open(ItemInCartDialogComponent) : this.cart.push(book);
  }

  totalPriceForItemsInCart() {
    if (this.cart.length === 0) {
      return 0;
    } else {
      let prices = this.cart.map(b => b.price * b.quantity);
      return prices.reduce((acc, crr) => acc + crr);
    }
  }

  bookQunatityAddService(book: Item) {
    book.quantity++;
  }

  bookQunatityRemoveService(book: Item) {
    book.quantity <= 1 ? book.quantity = 1 : book.quantity--;

  }

}