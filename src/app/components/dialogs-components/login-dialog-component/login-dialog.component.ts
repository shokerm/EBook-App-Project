import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageHandler } from 'src/app/models/LocalStorageHandler';
import { LoginUserForm } from 'src/app/models/LoginUserForm';
import { UserResponse } from 'src/app/models/LoginUsersModel';
import { AuthService } from 'src/app/services/auth.service';


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
      LocalStorageHandler.SaveUserResToLocalStorage(res);
      this.authService.getUserService(res.id).subscribe((user: any) => {
        console.log(user);
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
  //   this.authService.loginService(email, password).subscribe({
  //     next(res: UserResponse) {
  //       LocalStorageHandler.SaveUserResToLocalStorage(res);

  //       alert("user logged in!")
  //     }, error() {
  //       alert("Wrong user entry!")
  //     }
  //   })


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
