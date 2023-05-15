import { Injectable } from '@angular/core';
import { bookType } from '../models.ts/Item';





@Injectable({
  providedIn: 'root'
})
export class MyBooksDataService {

  constructor() { }

  books :bookType[] = [
    {bookName :"C#", src:"../../assets/Books/CSharp-Notes-For-Profesionals.pdf"},
    {bookName :"JavaScript", src:"../../assets/Books/JavaScript-Notes-For-Profesionals.pdf"},
    {bookName :"Python", src:"../../assets/Books/Python-Notes-For-Profesionals.pdf"},
    {bookName :"Asp.NET", src:"../../assets/Books/CSharp-Notes-For-Profesionals.pdf"},
    {bookName :"ReactJS", src:"../../assets/Books/React-JS-Notes-For-Professionals.pdf"},
    {bookName :"Angular", src:"../../assets/Books/Angular-2-Notes-For-Profesionals.pdf"},
    {bookName :"Git", src:"../../assets/Books/Git-Notes-For-Professionals.pdf"},
    {bookName :"JQuery", src:"../../assets/Books/JQuery-Notes-For-Professionals.pdf"},
    {bookName :"IOS Developer", src:"../../assets/Books/IOS-Developer-Notes-For-Professionals.pdf"},
    {bookName :".NET Framework", src:"../../assets/Books/Dot-NET-Framework-Notes-For-Professionals.pdf"}

  ];
}
