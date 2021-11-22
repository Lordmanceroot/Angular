import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarPanelComponent } from './navbar-panel/navbar-panel.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarPanelComponent,
    BasketComponent,
    LoginComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
