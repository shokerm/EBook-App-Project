import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { LoginUserForm } from '@models/loginUserForm';
import { UserResponse } from '@app/interfaces/loginUsersModel';
import { AuthService } from '@services/auth.service';
import { ErrorDialogComponent } from '../error-dialog-component/error-dialog-component.component';




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
      this.authService.getUserService().subscribe((user: any) => {
        this.authService.isLogin = true;
        this.authService.user = user;
        this.authService.loggedInUserChanged.next(user);
        // LocalStorageHandler.saveToLocalStorage(LocalStorageKey.currentUserName, user.userName);
        // location.reload();
      })
    }, err => {
      if (err) {
        this.dialog.open(ErrorDialogComponent,
          {
            data: {
              "header": "Error in login details!",
              "firstDialogLine": "Unfortunately, an error occurred while entering one or more of the username and/or password details",
              "secondDialogLine": "Please try re-entering the details and logging in."

            }
          });

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
