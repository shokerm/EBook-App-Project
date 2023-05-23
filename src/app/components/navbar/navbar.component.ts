import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { LoginDialogComponent } from '../dialogs-components/login-dialog-component/login-dialog.component';
import { CartDataService } from 'src/app/services/cart-data.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
