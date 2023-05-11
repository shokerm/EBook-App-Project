import { Injectable } from '@angular/core';
import { Item } from '../models.ts/Item';

@Injectable({
  providedIn: 'root'
})
export class StoredataService {

  constructor() { }

  booksStore :Item[]  = [
    {
      ImageUrl: "../../../../assets//Images/store-images/javascript-book.jpg",
      ImageAlt: "javascript-book",
      ItemContent: "JavaScript",
      LikeToggleStatus: "favorite_border"


    },
    {
      ImageUrl: "../../../../assets//Images/store-images/entity-framework-book.jpg",
      ImageAlt: "entity-framework-book",
      ItemContent: "Entity Framework",
      LikeToggleStatus: "favorite_border"

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/jquery-book.jpg",
      ImageAlt: "jQuery",
      ItemContent: "jQuery",
      LikeToggleStatus: "favorite_border"

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/powershell-book.jpg",
      ImageAlt: "Powershell",
      ItemContent: "Powershell",
      LikeToggleStatus: "favorite_border"

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/reactjs-book.jpg",
      ImageAlt: "ReactJS",
      ItemContent: "ReactJS",
      LikeToggleStatus: "favorite_border"

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/git-book.jpg",
      ImageAlt: "Git",
      ItemContent: "Git",
      LikeToggleStatus: "favorite_border"

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/ruby-on-rails-book.jpg",
      ImageAlt: "Ruby on Rails",
      ItemContent: "Ruby on Rails",
      LikeToggleStatus: "favorite_border"

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/oracle-database-book.jpg",
      ImageAlt: "Oracle Database",
      ItemContent: "Oracle Database",
      LikeToggleStatus: "favorite_border"

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/ios-developer-book.jpg",
      ImageAlt: "image-3",
      ItemContent: "IOS Developer ",
      LikeToggleStatus: "favorite_border",

    },
    {
      ImageUrl: "../../../../assets//Images/store-images/visual-basic-dotnet-book.jpg",
      ImageAlt: "Visual Basic .NET",
      ItemContent: "Visual Basic .NET",
      LikeToggleStatus: "favorite_border"

    }
  ];


  changeLikeToggleService(card: Item):void{
    card.LikeToggleStatus === "favorite_border" ?
    card.LikeToggleStatus = "favorite" :
    card.LikeToggleStatus = "favorite_border";
  }
}
