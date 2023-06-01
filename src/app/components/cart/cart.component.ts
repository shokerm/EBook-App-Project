import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { CartDataService } from 'src/app/services/cart-data.service';

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
