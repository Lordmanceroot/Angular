import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {CardsComponent} from "./components/cards/cards.component";
import {DeliveryComponent} from "./components/delivery/delivery.component";

const routes: Routes = [
  {path: '', component:CardsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'delivery', component:DeliveryComponent},

  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
