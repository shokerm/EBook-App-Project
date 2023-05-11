import { Injectable } from '@angular/core';
import { Item } from '../models.ts/Item';

@Injectable({
  providedIn: 'root'
})
export class AboutDatasService {

  constructor() { }

  cards :Item[] = [
    {
      Id: 1,
      ImageUrl: "../../../../assets//Images/books1.jpg",
      ImageAlt: "image-1",
      ItemContent: "Buy now our latest books for learning online!",
      LikeToggleStatus: "favorite_border",
      ItemPrice: 0
    },
    {
      Id:2,
      ImageUrl: "../../../../assets//Images/codingbooks.jpg",
      ImageAlt: "image-2",
      ItemContent: "Replace all your books with digital book!",
      LikeToggleStatus: "favorite_border",
      ItemPrice: 0
    },
    {
      Id: 3,
      ImageUrl: "../../../../assets//Images/learn-programming.jpeg",
      ImageAlt: "image-3",
      ItemContent: "Save all your work study with you.",
      LikeToggleStatus: "favorite_border",
      ItemPrice: 0
    }
  ];

  changeLikeToggleService(card: Item):void{
    card.LikeToggleStatus === "favorite_border" ?
    card.LikeToggleStatus = "favorite" :
    card.LikeToggleStatus = "favorite_border";
  }



}
