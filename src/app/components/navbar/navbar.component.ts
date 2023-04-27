import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public service: DataService) { }

  ngOnInit(): void {
  }

  changMode() {
    this.service.isDarkMode = !this.service.isDarkMode;
  }




}
