import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './item-in-cart-dialog.component.html',
  styleUrls: ['./item-in-cart-dialog.scss']
})
export class ItemInCartDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  submitted: boolean = false;
  afterSubmit: boolean = true;
  isLoginDialogDisplay: boolean = true;

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  moveToRegisterDialog(): void {
    this.isLoginDialogDisplay = false;
  }

  onSubmit(): void {
    this.submitted = true;
    this.afterSubmit = false;

  }

}
