import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarPanelComponent } from './components/navbar-panel/navbar-panel.component';
import { BasketComponent } from './components/basket/basket.component';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';

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
