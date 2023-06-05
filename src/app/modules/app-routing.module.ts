import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home-page/home.component';
import { AboutPageComponent } from '../components/pages/about-page/about-page.component';
import { MyBooksPageComponent } from '../components/pages/my-books-page/my-books-page.component';
import { CartPageComponent } from '../components/pages/cart-page/cart-page.component';
import { StorePageComponent } from '../components/pages/store-page/store-page.component';
import { ContactUsPageComponent } from '../components/pages/contact-us-page/contact-us-page.component';
import { PageNotFoundComponent } from '../components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'store', component: StorePageComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
  { path: 'my-books', component: MyBooksPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
