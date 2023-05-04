import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { registerUserForm } from 'src/app/models.ts/userContactDeatails';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  registerUserForm:registerUserForm = new registerUserForm('', '', '', '');
  submitted:boolean = false;
  afterSubmit:boolean = true;

  ngOnInit(): void {
  }

  closeDialog():void{
    this.dialog.ngOnDestroy();
  }

  onSubmit():void {
    this.submitted = true;
    this.afterSubmit = false;
  }

}
