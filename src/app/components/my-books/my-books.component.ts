import { Component, OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {PDFDocumentProxy} from 'ng2-pdf-viewer'
import { MyBooksDataService } from 'src/app/services/my-books-data.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  constructor(public service : MyBooksDataService) { }

  ngOnInit(): void {
  }
  src :string = "../../assets/Books/Wellcom-to-EBook.pdf";
  currentPage :number = 1;
  totalPages :number = 0;
  isOrginalSize :boolean = false;
  isShowAllPages :boolean = false;
  isFitToPage:boolean = false;
  isRenderTextLayer: boolean = false;
  isShowBorders :boolean = false;
  rotaionPosition: number = 0;
  zoom :number = 1;


  choseBookBtn(book:any){
    this.src = book.src;

  }
  

  backToFirstPage():void{
    this.currentPage =1;

  }
  nextPage():void{
    this.currentPage >=this.totalPages? this.currentPage = this.totalPages: this.currentPage++;
  }

  PrevPage():void{
    this.currentPage <=1? this.currentPage =1: this.currentPage--;
  }

  afterLoadComplete(pdf: PDFDocumentProxy):void{ 
    this.totalPages = pdf.numPages; 
  }


  rotationPositionToRight():void{
    this.rotaionPosition >=270 ? this.rotaionPosition =0 :this.rotaionPosition+=90;
  }

  rotationPositionToLeft():void{
    this.rotaionPosition <=-270  ? this.rotaionPosition =0 :this.rotaionPosition-=90;
  }

  zoomIn():void{
   
    this.zoom >=3.5? this.zoom =3.5 : this.zoom+=0.10;
  }

  zoomOut():void{
    this.zoom <= 0.4? this.zoom=0.3 :this.zoom-=0.10;
  }

  restSettings(orginalSizeToggle :MatSlideToggle,showAllPagesToggle :MatSlideToggle,fitToPageToggle :MatSlideToggle,
    renderTextLayerToggle :MatSlideToggle,showBordersToggle :MatSlideToggle):void{

    this.rotaionPosition= 0;
    this.zoom = 1;
    orginalSizeToggle.checked = false;
    showAllPagesToggle.checked = false;
    fitToPageToggle.checked = false;
    renderTextLayerToggle.checked = false;
    showBordersToggle.checked = false;
  }

}
