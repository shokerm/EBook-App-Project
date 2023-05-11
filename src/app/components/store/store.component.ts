import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models.ts/Item';
import { CartDataService } from 'src/app/services/cart-data.service';
import { StoredataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(public service: StoredataService, public cartService:CartDataService) { }

  ngOnInit(): void {
  }

  changeLikeToggle(card: Item) {
   this.service.changeLikeToggleService(card);
  }

  addToCart(book :Item){
    this.cartService.addToCartService(book);
  }

}
