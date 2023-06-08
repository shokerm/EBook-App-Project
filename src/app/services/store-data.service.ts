import { Injectable } from '@angular/core';
import { Item } from '@models/item';

@Injectable({
  providedIn: 'root'
})
export class StoredataService {

  constructor() { }

  // booksStore :Item[]  = [
  //   {
  //     id:1,
  //     imageUrl: "../../../../assets//Images/store-images/javascript-book.jpg",
  //     imageAlt: "javascript-book",
  //     name: "JavaScript",
  //     likeToggleStatus: "favorite_border",
  //     price: 99.90,
  //     quantity: 1


  //   },
  //   {
  //     id:2,
  //     imageUrl: "../../../../assets//Images/store-images/entity-framework-book.jpg",
  //     imageAlt: "entity-framework-book",
  //     name: "Entity Framework",
  //     likeToggleStatus: "favorite_border",
  //     price: 79.90,
  //     quantity: 1
  //   },
  //   {
  //     id:3,
  //     imageUrl: "../../../../assets//Images/store-images/jquery-book.jpg",
  //     imageAlt: "jQuery",
  //     name: "jQuery",
  //     likeToggleStatus: "favorite_border",
  //     price: 59.90,
  //     quantity: 1

  //   },
  //   {
  //     id: 4,
  //     imageUrl: "../../../../assets//Images/store-images/powershell-book.jpg",
  //     imageAlt: "Powershell",
  //     name: "Powershell",
  //     likeToggleStatus: "favorite_border",
  //     price: 49.90,
  //     quantity: 1

  //   },
  //   {
  //     id: 5,
  //     imageUrl: "../../../../assets//Images/store-images/reactjs-book.jpg",
  //     imageAlt: "ReactJS",
  //     name: "ReactJS",
  //     likeToggleStatus: "favorite_border",
  //     price: 299.90,
  //     quantity: 1

  //   },
  //   {
  //     id: 6,
  //     imageUrl: "../../../../assets//Images/store-images/git-book.jpg",
  //     imageAlt: "Git",
  //     name: "Git",
  //     likeToggleStatus: "favorite_border",
  //     price: 99.90,
  //     quantity: 1

  //   },
  //   {
  //     id:7,
  //     imageUrl: "../../../../assets//Images/store-images/ruby-on-rails-book.jpg",
  //     imageAlt: "Ruby on Rails",
  //     name: "Ruby on Rails",
  //     likeToggleStatus: "favorite_border",
  //     price: 99.90,
  //     quantity: 1

  //   },
  //   {
  //     id:8,
  //     imageUrl: "../../../../assets//Images/store-images/oracle-database-book.jpg",
  //     imageAlt: "Oracle Database",
  //     name: "Oracle Database",
  //     likeToggleStatus: "favorite_border",
  //     price: 99.90,
  //     quantity: 1

  //   },
  //   {
  //     id:9,
  //     imageUrl: "../../../../assets//Images/store-images/ios-developer-book.jpg",
  //     imageAlt: "image-3",
  //     name: "IOS Developer ",
  //     likeToggleStatus: "favorite_border",
  //     price: 149.90,
  //     quantity: 1

  //   },
  //   {
  //     id:10,
  //     imageUrl: "../../../../assets//Images/store-images/visual-basic-dotnet-book.jpg",
  //     imageAlt: "Visual Basic .NET",
  //     name: "Visual Basic .NET",
  //     likeToggleStatus: "favorite_border",
  //     price: 49.90,
  //     quantity: 1

  //   }
  // ];

  changeLikeToggleService(card: Item): void {
    card.likeToggleStatus === "favorite_border" ?
      card.likeToggleStatus = "favorite" :
      card.likeToggleStatus = "favorite_border";
  }
}
