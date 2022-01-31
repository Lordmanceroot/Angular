import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProductsComponent} from "./components/products/products.component";
import {DeliveryComponent} from "./components/delivery/delivery.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
