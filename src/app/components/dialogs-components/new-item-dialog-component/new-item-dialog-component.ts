import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEdittedItem } from '@models/newEdittedItem';
import { ItemsApiService } from '@services/items-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginIsNotLogInDialogComponent } from '../login-is-not-login-dialog-component/login-is-not-log-in-dialog.component';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './new-item-dialog-component.html',
  styleUrls: ['./new-item-dialog-component.scss']
})
export class NewItemDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private itemsAPI: ItemsApiService, @Inject(MAT_DIALOG_DATA) public data: { id: string }) { }

  newEdittedItem: NewEdittedItem = new NewEdittedItem('', undefined, '', '');
  submitted: boolean = false;
  afterSubmit: boolean = true;

  itemId: any;

  ngOnInit(): void {
    this.itemId = this.data.id;
  }

  onSubmit(): void {
    this.submitted = true;
    this.afterSubmit = false;
  }


  addNewItem(): void {
    this.itemsAPI.addItem(this.newEdittedItem).subscribe((x: any) => {
      this.dialog.closeAll();
    }, err => {
      if (err) {
        this.dialog.ngOnDestroy();
        this.dialog.open(LoginIsNotLogInDialogComponent);
      }

    }
    )

  }
  closeDialog(): void {
    this.dialog.closeAll();
  }



}
