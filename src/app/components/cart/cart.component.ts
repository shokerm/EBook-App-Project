import { Component, OnInit, Input } from '@angular/core';
import { Item } from '@models/item';
import { saleDTOArray } from '@models/salesDTO';
import { CartDataService } from '@services/cart-data.service';
import { SalesApiService } from '@services/sales-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public service: CartDataService, private salesAPIService: SalesApiService) { }

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


  purchase() {


    let currentCart = saleDTOArray(this.service.cart);

    currentCart.forEach((e: any) => {
      console.log(e);

      this.salesAPIService.addNewSale(e).subscribe(x => {

      })

      console.log(e);
    });

    // this.service.cart.splice(0, this.service.cart.length);

  }



}
