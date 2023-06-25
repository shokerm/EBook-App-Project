import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserUpdateDTO } from '@models/userUpdateDTO';
import { AuthService } from '@services/auth.service';


@Component({
  selector: 'update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.scss']
})
export class UpdateUserDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private authServics: AuthService, @Inject(MAT_DIALOG_DATA) public data: { user: any }) { }

  updateUserDTO: UserUpdateDTO = new UserUpdateDTO(this.authServics.user.userName, this.authServics.user.email, '');
  submitted: boolean = false;
  afterSubmit: boolean = true;

  ngOnInit(): void {
    this.updateUserDTO.userName = this.data.user.userName;
    this.updateUserDTO.email = this.data.user.email;

  }

  users: any;
  getusers(): void {
    this.authServics.getUserService().subscribe((d: any) => {
      this.updateUserDTO.userName = d.userName;
      this.updateUserDTO.email = d.email;
      this.users = [{
        "id": d.id,
        "userName": d.userName,
        "email": d.email
      }]
      this.dialog.closeAll();
    })

  }

  updateUser() {
    var upuser = {
      "userName": this.updateUserDTO.userName,
      "email": this.updateUserDTO.email,
      "password": this.updateUserDTO.password,
    }
    this.authServics.updateUserService(upuser).subscribe((x: any) => {
      this.authServics.user.userName = upuser.userName;
      this.authServics.user.email = upuser.email;

      this.getusers();
    })

  }

  onSubmit(): void {
    this.submitted = true;
    this.afterSubmit = false;
  }

  closeDialog(): void {
    this.dialog.closeAll();

  }



}