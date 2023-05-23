import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { LoginDialogComponent } from '../dialogs-components/login-dialog-component/login-dialog.component';
import { CartDataService } from 'src/app/services/cart-data.service';



@Component({
  selector: 'navbar-phones',
  templateUrl: './navbar-phones.component.html',
  styleUrls: ['./navbar-phones.component.scss']
})
export class NavbarPhonesComponent implements OnInit {

  constructor(public service: DataService, public dialog: MatDialog, public cartService:CartDataService) { }

  ngOnInit(): void {
  }


  changMode():void{
    this.service.isDarkMode = !this.service.isDarkMode;
  }

  openDialog():void{
    this.dialog.open(LoginDialogComponent,{autoFocus:false});
  }

  getInCartITems(){
    return this.cartService.cart.length? this.cartService.cart.length : null;     
  }

}
