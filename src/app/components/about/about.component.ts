import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models.ts/Item';
import { AboutDatasService } from 'src/app/services/about-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public service: AboutDatasService) { }

  ngOnInit(): void {
  }


  changeLikeToggle(card: Item):void{
      this.service.changeLikeToggleService(card);
  }

}
