import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserDialogComponent } from '@components/dialogs-components/update-user-dialog-component/update-user-dialog.component';
import { AuthService } from '@services/auth.service';
import { ItemsApiService } from '@services/items-api.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private itemsApiService: ItemsApiService, private dialog: MatDialog,
    private authService: AuthService) { }
  displayedColumns: string[] = ['id', 'userName', 'email', 'authLevel', 'edit'];
  dataSource: any


  ngOnInit(): void {
    this.getusers();
  }

  getusers(): void {
    this.authService.getUserService().subscribe((d: any) => {
      if (d.authLevel === 0 || d.authLevel === 1) {
        this.dataSource = [{
          "id": d.id,
          "userName": d.userName,
          "email": d.email,
          "authLevel": d.authLevel

        }]

      } else {
        this.authService.getAllUsersService().subscribe((d: any) => {
          this.dataSource = d
        })
      }

    })

  }


  editUser(element: any): void {

    this.dialog.open(UpdateUserDialogComponent, {
      data: {
        "user": element

      }
    }).afterClosed().subscribe(x => {
      this.getusers();
    })

  }


}
