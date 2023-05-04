import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoredataService {

  constructor() { }

  booksStore = [
    {
      imageUrl: "../../../../assets//Images/store-images/javascript-book.jpg",
      imageAlt: "javascript-book",
      cardContent: "JavaScript full book",
      likeToggleStatus: "favorite_border"


    },
    {
      imageUrl: "../../../../assets//Images/store-images/entity-framework-book.jpg",
      imageAlt: "entity-framework-book",
      cardContent: "Entity Framework full book",
      likeToggleStatus: "favorite_border"

    },
    {
      imageUrl: "../../../../assets//Images/store-images/jquery-book.jpg",
      imageAlt: "jQuery",
      cardContent: "jQuery full book",
      likeToggleStatus: "favorite_border"

    },
    {
      imageUrl: "../../../../assets//Images/store-images/powershell-book.jpg",
      imageAlt: "Powershell",
      cardContent: "Powershell full book",
      likeToggleStatus: "favorite_border"

    },
    {
      imageUrl: "../../../../assets//Images/store-images/reactjs-book.jpg",
      imageAlt: "ReactJS",
      cardContent: "ReactJS full book",
      likeToggleStatus: "favorite_border"

    },
    {
      imageUrl: "../../../../assets//Images/store-images/git-book.jpg",
      imageAlt: "Git",
      cardContent: "Git full book",
      likeToggleStatus: "favorite_border"

    },
    {
      imageUrl: "../../../../assets//Images/store-images/ruby-on-rails-book.jpg",
      imageAlt: "Ruby on Rails",
      cardContent: "Ruby on Rails full book",
      likeToggleStatus: "favorite_border"

    },
    {
      imageUrl: "../../../../assets//Images/store-images/oracle-database-book.jpg",
      imageAlt: "Oracle Database",
      cardContent: "Oracle Database full book",
      likeToggleStatus: "favorite_border"

    },
    {
      imageUrl: "../../../../assets//Images/store-images/ios-developer-book.jpg",
      imageAlt: "image-3",
      cardContent: "Save all your work study with you.",
      likeToggleStatus: "favorite_border",

    },
    {
      imageUrl: "../../../../assets//Images/store-images/visual-basic-dotnet-book.jpg",
      imageAlt: "Visual Basic .NET",
      cardContent: "Visual Basic .NET full book",
      likeToggleStatus: "favorite_border"

    }
  ];
}
