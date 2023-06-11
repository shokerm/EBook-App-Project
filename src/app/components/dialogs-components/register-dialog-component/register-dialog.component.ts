import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserForm } from '@models/registerUserForm';
import { AuthService } from '@services/auth.service';


@Component({
  selector: 'app-register-dialog',
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
