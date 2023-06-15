import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginIsNotLogInDialogComponent } from '@components/dialogs-components/login-is-not-login-dialog-component/login-is-not-log-in-dialog.component';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dialog: MatDialog) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (LocalStorageHandler.isUserLoggedIn()) {
      return true;
    } else {
      this.dialog.open(LoginIsNotLogInDialogComponent);
      return false;
    }

  }

}
