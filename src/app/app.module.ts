import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AddToCartServiceService } from './_services/add-to-cart-service.service';
import {HttpClientModule } from '@angular/common/http'
import { IndianCurrency } from './cart/indianCurrency.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RetailerhomepageComponent } from './retailerhomepage/retailerhomepage.component';
import { ProductMasterHomeComponent } from './product-master-home/product-master-home.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserHomeComponent } from './user-home/user-home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProductmasterhomeComponent } from './productmasterhome/productmasterhome.component';
import { AddproductComponent } from './productmasterhome/addproduct/addproduct.component';
import { ViewproductComponent } from './productmasterhome/viewproduct/viewproduct.component';
import { AdminHomeComponent } from './adminhome/admin-home.component';
import { FormretailerComponent } from './adminhome/formretailer/formretailer.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { ViewCancelComponent } from './view-cancel/view-cancel.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CartComponent,
    IndianCurrency,
    NavBarComponent,
    HomeComponent,
    RetailerhomepageComponent,
    AdminHomeComponent,
    ProductMasterHomeComponent,
    UserHomeComponent,
    WishlistComponent,
    SideNavComponent,
    ProductmasterhomeComponent,
    AddproductComponent,
    ViewproductComponent,
    FormretailerComponent,
    OrderpageComponent,
    ViewCancelComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ],
  providers: [AddToCartServiceService , authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
