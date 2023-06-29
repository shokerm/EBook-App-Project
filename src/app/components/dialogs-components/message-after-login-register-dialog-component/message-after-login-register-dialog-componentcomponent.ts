import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog-component/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog-component/register-dialog.component';




@Component({
  selector: 'error-dialog',
  templateUrl: './message-after-login-register-dialog-component.component.html',
  styleUrls: ['./message-after-login-register-dialog-component.component.scss']
})
export class MessageAfterLoginRegisterDialogComponent implements OnInit {
  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {
      icon: string, header: string, firstDialogLine: string, secondDialogLine: string,
      isLoginButtonShow: boolean
    }) { }


  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, { autoFocus: false });
  }

  ngOnInit(): void {
    this.icon = this.data.icon;
    this.header = this.data.header;
    this.firstDialogLine = this.data.firstDialogLine;
    this.secondDialogLine = this.data.secondDialogLine;
    this.isLoginButtonShow = this.data.isLoginButtonShow;
  }
  icon: string | undefined;
  header: string | undefined;
  firstDialogLine: string | undefined;
  secondDialogLine: string | undefined;
  isLoginButtonShow: boolean = false;
  alertColor: string | undefined;

}
