import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageHandler } from 'src/app/models/LocalStorageHandler';
import { LoginUserForm } from 'src/app/models/LoginUserForm';
import { UserTokenResponse } from 'src/app/models/LoginUsersModel';
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

  closeDialog() {
    this.dialog.closeAll();

  }

  login(email: string, password: string) {
    this.authService.loginService(email, password).subscribe((data: UserTokenResponse) => {
      LocalStorageHandler.SaveUserLoginToken(data.token);
    })
    this.dialog.closeAll();
  }

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
