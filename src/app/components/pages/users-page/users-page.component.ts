import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { JoinedSaleItem } from '@app/interfaces/saleItem';
import { UpdateUserDialogComponent } from '@components/dialogs-components/update-user-dialog-component/update-user-dialog.component';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { UserUpdateDTO } from '@models/userUpdateDTO';
import { AuthService } from '@services/auth.service';
import { ItemsApiService } from '@services/items-api.service';
import { SalesApiService } from '@services/sales-api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private salesApiService: SalesApiService, private itemsApiService: ItemsApiService, private dialog: MatDialog,
    private authService: AuthService) { }
  displayedColumns: string[] = ['id', 'userName', 'email', 'edit'];
  dataSource: any


  ngOnInit(): void {
    this.getusers();
    console.log(this.authService.user);


  }

  getusers(): void {
    this.authService.getUserService().subscribe((d: any) => {
      this.dataSource = [{
        "id": d.id,
        "userName": d.userName,
        "email": d.email
      }]

    })

  }


  editUser(): void {
    this.dialog.open(UpdateUserDialogComponent, {
      data: {
        "user": this.authService.user

      }
    }).afterClosed().subscribe(x => {
      this.getusers();
    })

  }


}
