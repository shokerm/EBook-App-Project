import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { AuthService } from '@services/auth.service';
import { DataService } from '@services/data.service';
import { LoaderService } from '@services/interceptors/loader.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {
  constructor(public service: DataService, private authService: AuthService, public loader: LoaderService, public dataService: DataService,
    private cdref: ChangeDetectorRef) {
    if (LocalStorageHandler.getUserIdFromLocalStorage()) {
      this.refreshToken();
    }
  }
  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
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
