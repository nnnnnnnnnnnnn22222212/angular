import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './component/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AboutComponent } from './component/about/about.component';
import { ProducttComponent } from './component/productt/productt.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { BannerComponent } from './component/banner/banner.component';
import { BannervidComponent } from './component/bannervid/bannervid.component';
import { HttpClientModule } from '@angular/common/http';
import { MiddleinforComponent } from './component/middleinfor/middleinfor.component';
import { CartComponent } from './component/cart/cart.component';
import { CartDetailComponent } from './component/cart-detail/cart-detail.component';
// import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { AdminComponent } from './admin/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AddProductsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductComponent,
    LayoutComponent,
    LayoutAdminComponent,
    AboutComponent,
    ProducttComponent,

    NavbarComponent,
    MainComponent,
    LoginComponent,
    ErrorComponent,
    BannerComponent,
    BannervidComponent,
    MiddleinforComponent,
    CartComponent,
    CartDetailComponent,
    // CreateComponent,
    UpdateComponent,
    AdminComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
