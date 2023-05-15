import { Component, OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {PDFDocumentProxy} from 'ng2-pdf-viewer'
import { bookType } from 'src/app/models.ts/Item';
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
  pageOptions : 'page-height' | 'page-fit' | 'page-width' = 'page-width';
  selectedValue :string = '';
  PageOptionsValues = [
    {value: 'page-height'},
    {value: 'page-fit'},
    {value: 'page-width'}
  ];
  isSettingsBarIsHidden :boolean = true;
  settingsButtonName: string = 'More Settings';

  choseBookBtn(book:bookType){
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

  resetSettings(orginalSizeToggle :MatSlideToggle,showAllPagesToggle :MatSlideToggle,fitToPageToggle :MatSlideToggle,
    renderTextLayerToggle :MatSlideToggle,showBordersToggle :MatSlideToggle):void{

    this.rotaionPosition= 0;
    this.zoom = 1;
    this.pageOptions = "page-width";
    orginalSizeToggle.checked = false;
    showAllPagesToggle.checked = false;
    fitToPageToggle.checked = false;
    renderTextLayerToggle.checked = false;
    showBordersToggle.checked = false;
  }

  updatePage(inputPage:any){
  inputPage.value >=1 ?this.currentPage = inputPage.value : inputPage.value = 1;
  }

  settingsBarToggleButton():void{
    this.isSettingsBarIsHidden ? this.settingsButtonName = 'Less Settings' : this.settingsButtonName ="More Settings";
    this.isSettingsBarIsHidden = !this.isSettingsBarIsHidden;
  }

}
