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

  ngOnInit(): void {
  }

  closeDialog() {
    this.isLoginDialogDisplay = false;
  }

  loginUserForm = new loginUserForm('', '');

  submitted = false;

  afterSubmit = true;

  isLoginDialogDisplay: boolean = true;



  onSubmit() {

    this.submitted = true;
    this.afterSubmit = false;


  }

}
