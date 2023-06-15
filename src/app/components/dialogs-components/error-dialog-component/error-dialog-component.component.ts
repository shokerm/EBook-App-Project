import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog-component/login-dialog.component';




@Component({
  selector: 'error-dialog',
  templateUrl: './error-dialog-component.component.html',
  styleUrls: ['./error-dialog-component.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { header: string, firstDialogLine: string, secondDialogLine: string }) { }


  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, { autoFocus: false });
  }
  ngOnInit(): void {
    this.header = this.data.header;
    this.firstDialogLine = this.data.firstDialogLine;
    this.secondDialogLine = this.data.secondDialogLine;
  }

  header: string | undefined;
  firstDialogLine: string | undefined;
  secondDialogLine: string | undefined;


}
