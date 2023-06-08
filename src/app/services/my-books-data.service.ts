import { Injectable } from '@angular/core';
import { BookType } from '@models/item';


const booksUrl = '../../assets/books';


@Injectable({
  providedIn: 'root'
})
export class MyBooksDataService {

  constructor() { }

  books: BookType[] = [
    { bookName: "C#", src: `${booksUrl}/CSharp-Notes-For-Profesionals.pdf` },
    { bookName: "JavaScript", src: `${booksUrl}/JavaScript-Notes-For-Profesionals.pdf` },
    { bookName: "Python", src: `${booksUrl}/Python-Notes-For-Profesionals.pdf` },
    { bookName: "Asp.NET", src: `${booksUrl}/CSharp-Notes-For-Profesionals.pdf` },
    { bookName: "ReactJS", src: `${booksUrl}/React-JS-Notes-For-Professionals.pdf` },
    { bookName: "Angular", src: `${booksUrl}/Angular-2-Notes-For-Profesionals.pdf` },
    { bookName: "Git", src: `${booksUrl}/Git-Notes-For-Professionals.pdf` },
    { bookName: "JQuery", src: `${booksUrl}/JQuery-Notes-For-Professionals.pdf` },
    { bookName: "IOS Developer", src: `${booksUrl}/IOS-Developer-Notes-For-Professionals.pdf` },
    { bookName: ".NET Framework", src: `${booksUrl}/Dot-NET-Framework-Notes-For-Professionals.pdf` }

  ];
}
