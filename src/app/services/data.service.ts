import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // aboutComponenet cards data
  cards = [
    {
      imageUrl: "../../../../assets//Images/books1.jpg",
      imageAlt: "image-1",
      cardContent: "Buy now our latest books for learning online!",
      likeToggleStatus: "favorite_border"
    },
    {
      imageUrl: "../../../../assets//Images/codingbooks.jpg",
      imageAlt: "image-2",
      cardContent: "Replace all your books with digital book!",
      likeToggleStatus: "favorite_border"
    },
    {
      imageUrl: "../../../../assets//Images/learn-programming.jpeg",
      imageAlt: "image-3",
      cardContent: "Save all your work study with you.",
      likeToggleStatus: "favorite_border"
    }
  ];



}
