import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../components/about/about.component';
import { CartComponent } from '../components/cart/cart.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component'
import { MyBooksComponent } from '../components/my-books/my-books.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { StoreComponent } from '../components/store/store.component';
import { AboutPageComponent } from '../components/pages/about-page/about-page.component';
import { DataService } from '../services/data.service';
import { CartPageComponent } from '../components/pages/cart-page/cart-page.component';
import { MyBooksPageComponent } from '../components/pages/my-books-page/my-books-page.component';
import { ContactUsPageComponent } from '../components/pages/contact-us-page/contact-us-page.component';
import { StorePageComponent } from '../components/pages/store-page/store-page.component';
import { AboutDatasService } from '../services/about-data.service';
import { StoredataService } from '../services/store-data.service';
import { SubNavComponent } from '../components/sub-nav/sub-nav.component';
import { LoginDialogComponent } from '../components/dialogs-components/login-dialog-component/login-dialog.component';
import { RegisterDialogComponent } from '../components/dialogs-components/register-dialog-component/register-dialog.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    CartComponent,
    ContactUsComponent,
    MyBooksComponent,
    HomeComponent,
    StoreComponent,
    AboutPageComponent,
    CartPageComponent,
    MyBooksPageComponent,
    ContactUsPageComponent,
    StorePageComponent,
    SubNavComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    SearchBarComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,


  ],
  providers: [DataService, AboutDatasService, StoredataService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
