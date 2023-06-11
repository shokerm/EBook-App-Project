import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageKey } from '@models/enums';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { LoginUserForm } from '@models/loginUserForm';
import { UserResponse } from '@models/loginUsersModel';
import { AuthService } from '@services/auth.service';




@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  constructor(public dialog: MatDialog, private authService: AuthService) { }

  loginUserForm: LoginUserForm = new LoginUserForm('', '');
  submitted: boolean = false;
  afterSubmit: boolean = true;
  isLoginDialogDisplay: boolean = true;


  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialog.closeAll();

  }
  //#region deprecated way
  login(email: string, password: string) {
    this.authService.loginService(email, password).subscribe((res: UserResponse) => {
      LocalStorageHandler.saveUserResToLocalStorage(res);
      this.authService.getUserService(res.id).subscribe((user: any) => {
        LocalStorageHandler.saveToLocalStorage(LocalStorageKey.currentUserName, user.name);
      })
    }, err => {
      if (err) {
        alert("Wrong user entry")
      }
    })
    this.dialog.closeAll();
  }
  //#endregion

  //#region new way
  // login(email: string, password: string) {
  //   var self = this;
  //   this.authService.loginService(email, password).subscribe({
  //     next(res: UserResponse) {
  //       LocalStorageHandler.saveUserResToLocalStorage(res);
  //       alert("user logged in!");
  //       self.authService.getUserService(res.id).subscribe({
  //         next(value: any) {
  //           console.log(value);
  //           LocalStorageHandler.saveToLocalStorage(LocalStorageKey.currentUserName, value.name);
  //         }, error() {
  //           alert("Wrong user name!")
  //         }
  //       })
  //     },
  //     error() {
  //       alert("Wrong user entry!")
  //     }
  //   });

  //   this.dialog.closeAll();
  // }
  //#endregion
  moveToRegisterDialog(): void {
    this.isLoginDialogDisplay = false;

  }

  onSubmit(): void {
    this.submitted = true;
    this.afterSubmit = false;

  }

  showLoginDialog(value: boolean) {
    this.isLoginDialogDisplay = value;
  }

}
