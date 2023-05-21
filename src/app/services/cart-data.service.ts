import { Injectable } from '@angular/core';
import { Item } from '../models.ts/Item';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }

  cart: Item[] = [];



removeItemService(book:Item):void{
  let index = this.cart.findIndex(b=>b.id === book.id);
  this.cart.splice(index,1);
}

addToCartService(book:Item):void{
  let index = this.cart.findIndex(b=>b.id === book.id);

  index > -1 ? alert("this book already in cart!") :this.cart.push(book);
}

totalPriceForItemsInCart(){

  if(this.cart.length ===0){
    return 0;
      }else{
        let prices = this.cart.map(b=>b.price*b.quantity);
        return prices.reduce((acc,crr)=>acc+crr);
      }
    }

    bookQunatityAddService(book:any){
      book.quantity++;
    }

    bookQunatityRemoveService(book: any){
      book.quantity <= 1? book.quantity = 1 :  book.quantity--;
     
    }


}