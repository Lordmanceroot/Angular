import {Product} from "../models/product.model";
import {productsQuote} from "../mock/basket.mock";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  deleteProductFromCart(product: Product): void {
    const findIndex = productsQuote.findIndex((data: Product) => data.id === product.id);
    productsQuote.splice(findIndex, 1);
  };
}
