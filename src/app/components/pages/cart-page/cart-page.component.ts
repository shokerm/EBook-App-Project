import { Component, OnInit } from '@angular/core';
import { CartDataService } from '@services/cart-data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(public service: CartDataService) { }

  ngOnInit(): void {
  }


}
