import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@components/dialogs-components/login-dialog-component/login-dialog.component';
import { DataService } from '@services/data.service';
import { CartDataService } from '@services/cart-data.service';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageHandler } from '@models/localStorageHandler';




@Component({
  selector: 'navbar-tablets',
  templateUrl: './navbar-tablets.component.html',
  styleUrls: ['./navbar-tablets.component.scss']
})
export class NavbarTabletsComponent implements OnInit {

  constructor(public service: DataService, public dialog: MatDialog, public cartService: CartDataService, public authService: AuthService,
    private route: Router) { }

  ngOnInit(): void {
  }


  currentUserName: any;

  changMode(): void {
    this.service.isDarkMode = !this.service.isDarkMode;
  }

  openDialog(): void {
    this.dialog.open(LoginDialogComponent, { autoFocus: false });
  }

  getInCartITems() {
    return this.cartService.cart.length ? this.cartService.cart.length : null;
  }

  userIsLoggedIn() {
    if (this.authService.user) {
      this.currentUserName = this.authService.user.userName;
      return true;
    } else {
      return false;
    }

  }

  logOut() {
    this.authService.user = null;
    this.authService.isLogin = false;
    this.authService.loggedInUserChanged.next(null);
    LocalStorageHandler.deleteAllLocalStoreage();
    this.cartService.cart = [];
    this.route.navigate(["/home"]);

  }

}
