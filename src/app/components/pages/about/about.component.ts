import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public service: DataService) { }

  ngOnInit(): void {
  }


  likeToggle(card: any) {
    card.likeToggleStatus === "favorite_border" ?
      card.likeToggleStatus = "favorite" :
      card.likeToggleStatus = "favorite_border";
  }

}
