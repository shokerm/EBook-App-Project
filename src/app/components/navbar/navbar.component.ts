import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@services/data.service';
import { CartDataService } from '@services/cart-data.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public service: DataService, public dialog: MatDialog, public cartService: CartDataService) { }

  ngOnInit(): void {
  }







}
