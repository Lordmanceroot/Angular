import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  productsCart: Product[] = [];

  getProductCart() {
    return this.productsCart;
  };

  deleteProductFromCart(product: Product): void {
    const findIndex = this.productsCart.findIndex((data: Product) => data.id === product.id);
    this.productsCart.splice(findIndex, 1);
  };

  cleanCart() {
    this.productsCart.length = 0;
  };
}
