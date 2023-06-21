import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@components/dialogs-components/login-dialog-component/login-dialog.component';
import { DataService } from '@services/data.service';
import { CartDataService } from '@services/cart-data.service';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { AuthService } from '@services/auth.service';
import { LocalStorageKey } from '@models/enums';



@Component({
  selector: 'navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent implements OnInit {

  constructor(public service: DataService, public dialog: MatDialog, public cartService: CartDataService, public authService: AuthService) { }

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
    // this.currentUserName = LocalStorageHandler.getCurrentUserName();
    // return LocalStorageHandler.isUserNameIsExsit();

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
    // location.reload();

  }

}
