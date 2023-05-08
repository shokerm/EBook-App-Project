import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   src = '../../assets/Books/temp-pdf.pdf';
  // src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  currentPage :number =1;
  totalPages = 0;
  nextPage(){
    this.currentPage >=this.totalPages? this.currentPage = this.totalPages: this.currentPage++;

  }

  PervPage(){
    this.currentPage <=1? this.currentPage =1: this.currentPage--;
  }

  afterLoadComplete(pdf: any) { 
    this.totalPages = pdf.numPages; 
  }



}
