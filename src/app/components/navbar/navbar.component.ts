import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { LoginDialogComponent } from '../dialogs-components/dialog/login-dialog-component/login-dialog.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public service: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changMode() {
    this.service.isDarkMode = !this.service.isDarkMode;
  }

  openDialog() {

    this.dialog.open(LoginDialogComponent);

  }


}
