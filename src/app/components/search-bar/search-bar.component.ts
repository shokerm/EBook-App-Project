import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StoredataService } from '../../services/store-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(public service:StoredataService) { }

  ngOnInit(): void {
  }

  list = this.service.booksStore.reverse();
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
