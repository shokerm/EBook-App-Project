import { Injectable } from '@angular/core';
import { Item } from '../models.ts/Item';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }

  cart: Item[] = [];



removeItemService(book:Item):void{
  let index = this.cart.findIndex(b=>b.Id === book.Id);
  this.cart.splice(index,1);
}

addToCartService(book:Item):void{
  let index = this.cart.findIndex(b=>b.Id === book.Id);

  index > -1 ? alert("this book already in cart!") :this.cart.push(book);
}

totalPriceForItemsInCart(){

  if(this.cart.length ===0){
    return 0;
      }else{
        let prices = this.cart.map(b=>b.ItemPrice);
        return prices.reduce((acc,crr)=>acc+crr);
      }
    }

    quantityUpdateService(quantity: string,book:Item){

      let index = this.cart.findIndex(b=>b.Id === book.Id);
      this.cart[index].Quantity = parseInt(quantity);
     
    }


}