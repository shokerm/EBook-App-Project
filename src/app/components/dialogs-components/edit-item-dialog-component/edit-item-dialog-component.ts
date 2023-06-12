import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEdittedItem } from '@models/newEdittedItem';
import { ItemsApiService } from '@services/items-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './edit-item-dialog-component.html',
  styleUrls: ['./edit-item-dialog-component.scss']
})
export class EditItemDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private itemsAPI: ItemsApiService, @Inject(MAT_DIALOG_DATA) public data: { id: string }) { }

  newEdittedItem: NewEdittedItem = new NewEdittedItem('', undefined, '', '');
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
    })

  }
  closeDialog(): void {
    this.dialog.closeAll();
  }



}
