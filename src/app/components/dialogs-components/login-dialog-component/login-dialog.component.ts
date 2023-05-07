import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginUserForm } from 'src/app/models.ts/loginUserForm';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  loginUserForm:LoginUserForm = new LoginUserForm('', '');
  submitted:boolean = false;
  afterSubmit:boolean = true;
  isLoginDialogDisplay: boolean = true;

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  moveToRegisterDialog(): void {
    this.isLoginDialogDisplay = false;
  }

  onSubmit():void{
    this.submitted = true;
    this.afterSubmit = false;

  }

}
