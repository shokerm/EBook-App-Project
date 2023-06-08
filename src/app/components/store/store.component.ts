import { Component, OnInit } from '@angular/core';
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

  constructor(public service: StoredataService, public cartService: CartDataService, public ItemsApiService: ItemsApiService) {

  }

  ngOnInit(): void {
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

}
