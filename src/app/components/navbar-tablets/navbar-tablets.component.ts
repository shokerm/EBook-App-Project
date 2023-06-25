import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@components/dialogs-components/login-dialog-component/login-dialog.component';
import { DataService } from '@services/data.service';
import { CartDataService } from '@services/cart-data.service';
import { AuthService } from '@services/auth.service';



@Component({
  selector: 'navbar-tablets',
  templateUrl: './navbar-tablets.component.html',
  styleUrls: ['./navbar-tablets.component.scss']
})
export class NavbarTabletsComponent implements OnInit {

  constructor(public service: DataService, public dialog: MatDialog, public cartService: CartDataService, public authService: AuthService) { }

  ngOnInit(): void {
  }


  changMode(): void {
    this.service.isDarkMode = !this.service.isDarkMode;
  }

  openDialog(): void {
    this.dialog.open(LoginDialogComponent, { autoFocus: false });
  }

  getInCartITems() {
    return this.cartService.cart.length ? this.cartService.cart.length : null;
  }

}
