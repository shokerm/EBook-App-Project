import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models.ts/Item';
import { CartDataService } from 'src/app/services/cart-data.service';
import { ItemsApiService } from 'src/app/services/items-api.service';
import { StoredataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(public service: StoredataService, public cartService:CartDataService,public ItemsApiService :ItemsApiService) {
    
   }

  ngOnInit(): void {
    this.ItemsApiService.fetchItem().subscribe((x:any) =>{
      this.Items = x;
    });
    
  }
  Items:any;
  changeLikeToggle(card: Item) {
   this.service.changeLikeToggleService(card);
  }

  addToCart(book :Item){
    this.cartService.addToCartService(book);
  }

  bookQunatityAdd(book:Item){
    this.cartService.bookQunatityAddService(book);
  }
  bookQunatityRemove(book: Item){
    this.cartService.bookQunatityRemoveService(book);   
  }

}
