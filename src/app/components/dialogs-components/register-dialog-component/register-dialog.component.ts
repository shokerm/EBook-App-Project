import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserForm } from '@models/registerUserForm';
import { AuthService } from '@services/auth.service';
import { MessageAfterLoginRegisterDialogComponent } from '../message-after-login-register-dialog-component/message-after-login-register-dialog-componentcomponent';


@Component({
  selector: 'register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private authServics: AuthService) { }

  registerUserForm: RegisterUserForm = new RegisterUserForm('', '', '', '');
  submitted: boolean = false;
  afterSubmit: boolean = true;
  @Output() isLoginDialogIsShow = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  register(): void {
    this.authServics.registerService(this.registerUserForm.firstName, this.registerUserForm.email, this.registerUserForm.password)
      .subscribe((res: any) => {

      }, err => {
        this.dialog.open(MessageAfterLoginRegisterDialogComponent,
          {
            data: {
              "icon": "report_gmailerrorred",
              "header": "The User you tried to register already exists in the system",
              "firstDialogLine": "Please log in to your account and enter the login information for the user.",
              "secondDialogLine": "If you want to open another account please type new user data.",
              "isLoginButtonShow": true

            }
          }
        )
      })
    this.dialog.ngOnDestroy();
  }

  onSubmit(): void {
    this.submitted = true;
    this.afterSubmit = false;
  }

  backToLoginDialog(): void {
    this.isLoginDialogIsShow.emit(true)

  }

}