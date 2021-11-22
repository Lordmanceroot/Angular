import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './conponents/header/header.component';
import { NavbarPanelComponent } from './conponents/navbar-panel/navbar-panel.component';
import { BasketComponent } from './conponents/basket/basket.component';
import { LoginComponent } from './conponents/login/login.component';
import { CardsComponent } from './conponents/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarPanelComponent,
    BasketComponent,
    LoginComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
