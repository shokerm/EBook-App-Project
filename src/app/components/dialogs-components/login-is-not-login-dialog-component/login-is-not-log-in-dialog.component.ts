import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@services/auth.service';
import { LoginDialogComponent } from '../login-dialog-component/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog-component/register-dialog.component';




@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-is-not-log-in-dialog.component.html',
  styleUrls: ['./login-is-not-log-in-dialog.component.scss']
})
export class LoginIsNotLogInDialogComponent implements OnInit {
  constructor(private dialog: MatDialog) { }


  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, { autoFocus: false });
  }
  ngOnInit(): void {
  }

}
