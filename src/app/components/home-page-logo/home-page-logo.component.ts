import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page-logo',
  templateUrl: './home-page-logo.component.html',
  styleUrls: ['./home-page-logo.component.scss']
})
export class HomePageLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  homePageImage: string = "../../../../assets/images/ebook-store2.png";

}
