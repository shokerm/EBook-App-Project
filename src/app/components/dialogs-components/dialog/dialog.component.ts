import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserContactDeatail } from 'src/app/models.ts/userContactDeatails';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.ngOnDestroy();
  }

  userContactDetails = new UserContactDeatail('', '', '', '');

  submitted = false;

  afterSubmit = true;





  onSubmit() {

    this.submitted = true;
    this.afterSubmit = false;


  }

}
