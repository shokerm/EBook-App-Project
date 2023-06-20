import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEditedItem } from '@models/newEdittedItem';
import { ItemsApiService } from '@services/items-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog-component/error-dialog-component.component';
import { LoginIsNotLogInDialogComponent } from '../login-is-not-login-dialog-component/login-is-not-log-in-dialog.component';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './edit-item-dialog-component.html',
  styleUrls: ['./edit-item-dialog-component.scss']
})
export class EditItemDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private itemsAPI: ItemsApiService, @Inject(MAT_DIALOG_DATA) public data: { id: string }) { }

  newEdittedItem: NewEditedItem = new NewEditedItem('', undefined, '', '');
  submitted: boolean = false;
  afterSubmit: boolean = true;

  itemId: any;

  ngOnInit(): void {
    this.itemId = this.data.id;
    this.itemsAPI.getItem(this.itemId).subscribe((x: any) => {
      this.newEdittedItem.name = x.name;
      this.newEdittedItem.price = x.price;
      this.newEdittedItem.imageUrl = x.imageUrl;
      this.newEdittedItem.imageAlt = x.imageAlt;

    })
  }

  onSubmit(): void {
    this.submitted = true;
    this.afterSubmit = false;
  }


  editItem(): void {
    this.itemsAPI.editItem(this.itemId, this.newEdittedItem).subscribe((x: any) => {
      this.dialog.closeAll();
    }, err => {
      if (err) {

        this.dialog.closeAll();
        this.dialog.open(ErrorDialogComponent,
          {
            data: {
              "header": "You have not authorized to pefroem this action",
              "firstDialogLine": "Unfortunately, you don't have the authority to perform this action",
              "secondDialogLine": "Please ask from the administrator to provide you the authorization."

            }
          });
      }

    })

  }
  closeDialog(): void {
    this.dialog.closeAll();
  }



}
