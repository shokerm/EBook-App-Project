import { Component, OnInit, Input } from '@angular/core';
import { Item } from '@models/item';
import { CartDataService } from '@services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public service: CartDataService) { }

  ngOnInit(): void {
  }
  removeItem(book: Item) {
    this.service.removeItemService(book);
  }


  bookQunatityAdd(book: Item) {
    this.service.bookQunatityAddService(book);
  }
  bookQunatityRemove(book: Item) {
    this.service.bookQunatityRemoveService(book);
  }



}
