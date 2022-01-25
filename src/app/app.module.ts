import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarPanelComponent } from './components/navbar-panel/navbar-panel.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarPanelComponent,
    CartComponent,
    LoginComponent,
    ProductsComponent,
    FooterComponent,
    PageNotFoundComponent,
    DeliveryComponent,
    RegistrationComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
