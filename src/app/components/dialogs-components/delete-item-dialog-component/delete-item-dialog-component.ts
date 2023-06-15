import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './delete-item-dialog-component.html',
  styleUrls: ['./delete-item-dialog-component.scss']
})
export class DeleteItemDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  submitted: boolean = false;
  afterSubmit: boolean = true;
  isLoginDialogDisplay: boolean = true;

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  onSubmit(): void {
    this.submitted = true;
    this.afterSubmit = false;

  }
  clickOk() {
    return true;

  }

}
