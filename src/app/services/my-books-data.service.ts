import { Injectable } from '@angular/core';
import { BookType } from '@models/item';


const booksUrl = '../../assets/books';


@Injectable({
  providedIn: 'root'
})
export class MyBooksDataService {

  constructor() { }

  books: BookType[] = [
    { bookName: "Angular", src: `${booksUrl}/Angular-2-Notes-For-Profesionals.pdf`, itemId: 7 },
    { bookName: "C#", src: `${booksUrl}/CSharp-Notes-For-Profesionals.pdf`, itemId: 1 },
    { bookName: "JavaScript", src: `${booksUrl}/JavaScript-Notes-For-Profesionals.pdf`, itemId: 1 },
    { bookName: "Python", src: `${booksUrl}/Python-Notes-For-Profesionals.pdf`, itemId: 1 },
    { bookName: "Asp.NET", src: `${booksUrl}/CSharp-Notes-For-Profesionals.pdf`, itemId: 1 },
    { bookName: "ReactJS", src: `${booksUrl}/React-JS-Notes-For-Professionals.pdf`, itemId: 5 },
    { bookName: "Angular", src: `${booksUrl}/Angular-2-Notes-For-Profesionals.pdf`, itemId: 1 },
    { bookName: "Git", src: `${booksUrl}/Git-Notes-For-Professionals.pdf`, itemId: 6 },
    { bookName: "JQuery", src: `${booksUrl}/JQuery-Notes-For-Professionals.pdf`, itemId: 3 },
    { bookName: "IOS Developer", src: `${booksUrl}/IOS-Developer-Notes-For-Professionals.pdf`, itemId: 9 },
    { bookName: ".NET Framework", src: `${booksUrl}/Dot-NET-Framework-Notes-For-Professionals.pdf`, itemId: 2 },
    { bookName: "Oracle Database", src: `${booksUrl}/Orcale-Database-Notes-For-Professionals.pdf`, itemId: 8 },
    { bookName: "Ruby on Rails", src: `${booksUrl}/Ruby-on-Rails-Notes-For-Professionals.pdf`, itemId: 7 },



  ];
}
