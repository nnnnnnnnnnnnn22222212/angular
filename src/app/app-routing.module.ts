import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { MainComponent } from './component/main/main.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './component/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AboutComponent } from './component/about/about.component';
import { ProducttComponent } from './component/productt/productt.component';

import { ContactComponent } from './component/contact/contact.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
