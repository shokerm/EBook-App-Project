import { Injectable } from '@angular/core';
import { Item } from '@models/item';

@Injectable({
  providedIn: 'root'
})
export class StoredataService {

  constructor() { }

  imageUrl: any = localStorage.getItem("image");

  changeLikeToggleService(card: Item): void {
    card.likeToggleStatus === "favorite_border" ?
      card.likeToggleStatus = "favorite" :
      card.likeToggleStatus = "favorite_border";
  }
}
