import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@modules/material.module';
import { AppRoutingModule } from '@modules/app-routing.module';

import { AppComponent } from '../app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { AboutComponent } from '@components/about/about.component';
import { CartComponent } from '@components/cart/cart.component';
import { ContactUsComponent } from '@components/contact-us/contact-us.component'
import { MyBooksComponent } from '@components/my-books/my-books.component';
import { HomePageComponent } from '@components/pages/home-page/home-page.component';
import { StoreComponent } from '@components/store/store.component';
import { AboutPageComponent } from '@components/pages/about-page/about-page.component';
import { CartPageComponent } from '@components/pages/cart-page/cart-page.component';
import { MyBooksPageComponent } from '@components/pages/my-books-page/my-books-page.component';
import { ContactUsPageComponent } from '@components/pages/contact-us-page/contact-us-page.component';
import { StorePageComponent } from '@components/pages/store-page/store-page.component';
import { SubNavComponent } from '@components/sub-nav/sub-nav.component';
import { LoginDialogComponent } from '@components/dialogs-components/login-dialog-component/login-dialog.component';
import { RegisterDialogComponent } from '@components/dialogs-components/register-dialog-component/register-dialog.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { ItemInCartDialogComponent } from '@components/dialogs-components/item-in-cart-dialog-component/item-in-cart-dialog';
import { NavbarTabletsComponent } from '@components/navbar-tablets/navbar-tablets.component';
import { NavbarPhonesComponent } from '@components/navbar-phones/navbar-phones.component';
import { NavbarDesktopComponent } from '@components/navbar-desktop/navbar-desktop.component';
import { PageNotFoundComponent } from '@components/pages/page-not-found/page-not-found.component';
import { CartIsEmptyComponent } from '@components/cart-is-empty/cart-is-empty.component';

import { AboutDatasService } from '@services/about-data.service';
import { StoredataService } from '@services/store-data.service';
import { DataService } from '@services/data.service';
import { MyBooksDataService } from '@services/my-books-data.service';
import { CartDataService } from '@services/cart-data.service';
import { ItemsApiService } from '@services/items-api.service';
import { AuthService } from '@services/auth.service';
import { JwtInterceptor } from '@services/interceptors/jwt.interceptor';

import { FilterPipe } from '@pipes/filter.pipe';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginIsNotLogInDialogComponent } from '@components/dialogs-components/login-is-not-login-dialog-component/login-is-not-log-in-dialog.component';
import { EditItemDialogComponent } from '@components/dialogs-components/edit-item-dialog-component/edit-item-dialog-component';
import { NewItemDialogComponent } from '@components/dialogs-components/new-item-dialog-component/new-item-dialog-component';
import { DeleteItemDialogComponent } from '@components/dialogs-components/delete-item-dialog-component/delete-item-dialog-component';
import { UploadImageComponent } from '@components/upload-image/upload-image.component';
import { HomePageLogoComponent } from '@components/home-page-logo/home-page-logo.component';
import { AuthGuard } from '@app/guards/auth.guard';
import { ErrorDialogComponent } from '@components/dialogs-components/error-dialog-component/error-dialog-component.component';

const COMPONENTS = [
  AppComponent,
  NavbarComponent,
  NavbarDesktopComponent,
  NavbarTabletsComponent,
  NavbarPhonesComponent,
  FooterComponent,
  AboutComponent,
  CartComponent,
  CartIsEmptyComponent,
  ContactUsComponent,
  MyBooksComponent,
  HomePageComponent,
  StoreComponent,
  AboutPageComponent,
  CartPageComponent,
  MyBooksPageComponent,
  ContactUsPageComponent,
  StorePageComponent,
  SubNavComponent,
  LoginDialogComponent,
  RegisterDialogComponent,
  ItemInCartDialogComponent,
  LoginIsNotLogInDialogComponent,
  EditItemDialogComponent,
  NewItemDialogComponent,
  DeleteItemDialogComponent,
  ErrorDialogComponent,
  SearchBarComponent,
  PageNotFoundComponent,
  UploadImageComponent,
  HomePageLogoComponent

];
const SERVICES = [
  DataService,
  AboutDatasService,
  StoredataService,
  MyBooksDataService,
  CartDataService,
  ItemsApiService,
  AuthService,


];
const PIPES = [
  FilterPipe
];

const GUARDS = [AuthGuard]

@NgModule({
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PdfViewerModule,
    HttpClientModule



  ],
  providers: [SERVICES, PIPES, GUARDS,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
