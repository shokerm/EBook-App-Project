import { Component, OnInit } from '@angular/core';
import { AboutDatasService } from 'src/app/services/about-data.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public service: AboutDatasService) { }

  ngOnInit(): void {
  }


  likeToggle(card: any) {
    card.likeToggleStatus === "favorite_border" ?
      card.likeToggleStatus = "favorite" :
      card.likeToggleStatus = "favorite_border";
  }

}
