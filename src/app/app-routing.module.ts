import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProductMasterHomeComponent } from './product-master-home/product-master-home.component';
import { RetailerhomepageComponent } from './retailerhomepage/retailerhomepage.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProductmasterhomeComponent } from './productmasterhome/productmasterhome.component';
import { AddproductComponent } from './productmasterhome/addproduct/addproduct.component';
import { ViewproductComponent } from './productmasterhome/viewproduct/viewproduct.component';
import { AdminHomeComponent } from './adminhome/admin-home.component';
import { FormProductMasterComponent } from './adminhome/form-product-master/form-product-master.component';
import { FormretailerComponent } from './adminhome/formretailer/formretailer.component';


const routes: Routes = [
  {path: 'auth',component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserHomeComponent },
  { path: 'master', component: ProductMasterHomeComponent },

  {path:'retailer' , component: RetailerhomepageComponent},
  {path:'cart' , component: CartComponent},
  {path:'wishlist' , component: WishlistComponent},
  {path:'product' , component: ProductmasterhomeComponent},
  {path:'product/add' , component:  AddproductComponent},
  {path:'product/view' , component:  ViewproductComponent},
  {path:'adminhome' , component:  AdminHomeComponent},
  {path:'adminhome/editproductmaster' , component:FormProductMasterComponent },
  {path:'adminhome/editretailer' , component:FormretailerComponent },
 
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
