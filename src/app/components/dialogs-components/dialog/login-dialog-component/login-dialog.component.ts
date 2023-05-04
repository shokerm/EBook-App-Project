import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { loginUserForm } from 'src/app/models.ts/userContactDeatails';
import { RegisterDialogComponent } from '../register-dialog-component/register-dialog.component';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  loginUserForm:loginUserForm = new loginUserForm('', '');
  submitted:boolean = false;
  afterSubmit:boolean = true;
  isLoginDialogDisplay: boolean = true;

  ngOnInit(): void {
  }

  closeDialog() {
    this.isLoginDialogDisplay = false;
  }

  onSubmit():void{
    this.submitted = true;
    this.afterSubmit = false;

  }

}
