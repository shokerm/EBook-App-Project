import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { MyBooksComponent } from './components/pages/my-books/my-books.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: StoreComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'my-books', component: MyBooksComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
