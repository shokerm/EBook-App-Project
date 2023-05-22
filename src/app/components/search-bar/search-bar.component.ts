import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StoredataService } from '../../services/store-data.service';
import { ItemsApiService } from 'src/app/services/items-api.service';
import { BASE_URL } from 'src/app/models.ts/Base_Url';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(public service:StoredataService, public ItemsApiService:ItemsApiService) { }

  ngOnInit(): void {
      this.ItemsApiService.fetchItem().subscribe((x:object)=>{
      this.list = x
    })
  }

  list:any;
  @ViewChild('searchbar') searchbar: ElementRef =new ElementRef(null);
  searchText = '';

  toggleSearch: boolean = false;
 
  isSerchTextNotEmpty(){
    return this.searchText? true: false;
  }

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

}
