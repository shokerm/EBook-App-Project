import { Component } from '@angular/core';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { AuthService } from '@services/auth.service';
import { DataService } from '@services/data.service';
import { UserResponse } from './interfaces/loginUsersModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public service: DataService, private authService: AuthService) {
    if (LocalStorageHandler.getUserIdFromLocalStorage()) {
      this.refreshToken();
    }
  }

  isDarkTheme: boolean = this.service.isDarkMode;


  refreshToken() {
    this.authService.refreshToken().subscribe((res: any) => {
      LocalStorageHandler.saveUserResToLocalStorage(res);
      this.authService.getUserService().subscribe((user: any) => {
        this.authService.isLogin = true;
        this.authService.user = user;
        this.authService.loggedInUserChanged.next(user);
      })
    }

    )
  }






}
