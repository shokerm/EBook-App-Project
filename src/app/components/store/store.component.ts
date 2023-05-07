import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoredataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(public service: StoredataService) { }

  ngOnInit(): void {
  }

  changeLikeToggle(card: any) {
   this.service.changeLikeToggleService(card);
  }

}
