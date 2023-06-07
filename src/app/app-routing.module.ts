import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { MainComponent } from './component/main/main.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './component/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AboutComponent } from './component/about/about.component';
import { ProducttComponent } from './component/productt/productt.component';
import { LoginComponent } from './component/login/login.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { CartDetailComponent } from './component/cart-detail/cart-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product', component: ProducttComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'add-product', component: AddProductsComponent },
      // { path: 'update-product/:id', component: UpdateProductComponent },
      // { path: 'show-products', component: ShowProductsComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
