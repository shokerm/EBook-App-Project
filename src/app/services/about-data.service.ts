import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class AboutDatasService {

  constructor() { }

  cards: any[] = [
    {
      id: 1,
      imageUrl: "../../../../assets//Images/books1.jpg",
      imageAlt: "image-1",
      name: "Buy now our latest books for learning online!",
      likeToggleStatus: "favorite_border",
      price: 0,
      quantity: 1
    },
    {
      id: 2,
      imageUrl: "../../../../assets//Images/codingbooks.jpg",
      imageAlt: "image-2",
      name: "Replace all your books with digital book!",
      likeToggleStatus: "favorite_border",
      price: 0,
      quantity: 1
    },
    {
      id: 3,
      imageUrl: "../../../../assets//Images/learn-programming.jpeg",
      imageAlt: "image-3",
      name: "Save all your work study with you.",
      likeToggleStatus: "favorite_border",
      price: 0,
      quantity: 1
    }
  ];

  changeLikeToggleService(card: any): void {
    card.likeToggleStatus === "favorite_border" ?
      card.likeToggleStatus = "favorite" :
      card.likeToggleStatus = "favorite_border";
  }



}
