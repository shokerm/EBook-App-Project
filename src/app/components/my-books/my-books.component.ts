import { Component, OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

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
  totalPages :number = 0;
  isOrginalSize :boolean = false;
  isShowAllPages :boolean = false;
  isFitToPage:boolean = false;
  isRenderTextLayer: boolean = false;
  isShowBorders :boolean = false;
  rotaionPosition: number = 0;
  zoom :number = 1;
  nextPage(){
    this.currentPage >=this.totalPages? this.currentPage = this.totalPages: this.currentPage++;
  }

  PrevPage(){
    this.currentPage <=1? this.currentPage =1: this.currentPage--;
  }

  afterLoadComplete(pdf: any) { 
    this.totalPages = pdf.numPages; 
  }

  toggleChange(propertyKey :string){
    switch(propertyKey){
      case 'showAllPages':{
        this.isShowAllPages = !this.isShowAllPages;
      };
      break;
      case 'orginalSizeToggle':{
        this.isOrginalSize = !this.isOrginalSize;
      };
      break;
      case 'isFitToPage':{
        this.isFitToPage = !this.isFitToPage;
      };
      break;
      case 'isRenderTextLayer':{
        this.isRenderTextLayer = !this.isRenderTextLayer;
      };
      break;
      case 'isShowBorders':{
        this.isShowBorders = !this.isShowBorders;
      };
      break;

    }

  }

  rotationPositionToRight(){
    this.rotaionPosition >=270 ? this.rotaionPosition =0 :this.rotaionPosition+=90;
  }

  rotationPositionToLeft(){
    this.rotaionPosition <=-270  ? this.rotaionPosition =0 :this.rotaionPosition-=90;
  }

  zoomIn(){
   
    this.zoom >=3.5? this.zoom =3.5 : this.zoom+=0.10;
  }

  zoomOut(){
    this.zoom <= 0.4? this.zoom=0.3 :this.zoom-=0.10;
  }

  restSettings(mattoggle1 :MatSlideToggle,mattoggle2 :MatSlideToggle,mattoggle3 :MatSlideToggle,mattoggle4 :MatSlideToggle,mattoggle5 :MatSlideToggle){
    this.isFitToPage,this.isOrginalSize,this.isRenderTextLayer,this.isShowAllPages,this.isShowBorders =false;
    mattoggle1.checked = false;
    mattoggle2.checked = false;
    mattoggle3.checked = false;
    mattoggle4.checked = false;
    mattoggle5.checked = false;
    this.rotaionPosition = 0;
  }

}
