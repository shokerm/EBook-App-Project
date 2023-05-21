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
      Name: "Buy now our latest books for learning online!",
      LikeToggleStatus: "favorite_border",
      Price: 0,
      Quantity: 1
    },
    {
      Id:2,
      ImageUrl: "../../../../assets//Images/codingbooks.jpg",
      ImageAlt: "image-2",
      Name: "Replace all your books with digital book!",
      LikeToggleStatus: "favorite_border",
      Price: 0,
      Quantity: 1
    },
    {
      Id: 3,
      ImageUrl: "../../../../assets//Images/learn-programming.jpeg",
      ImageAlt: "image-3",
      Name: "Save all your work study with you.",
      LikeToggleStatus: "favorite_border",
      Price: 0,
      Quantity: 1
    }
  ];

  changeLikeToggleService(card: Item):void{
    card.LikeToggleStatus === "favorite_border" ?
    card.LikeToggleStatus = "favorite" :
    card.LikeToggleStatus = "favorite_border";
  }



}
