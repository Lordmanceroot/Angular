import {Product} from "../models/product.model";
import {productsQuote} from "../mock/basket.mock";
import {ProductService} from "./product.service";
import {take} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class QuoteService {
  products: Product[]= []
  constructor( private productService: ProductService) {
    this.productService.getProducts()
      .pipe(take(1))
      .subscribe((products) => this.products = products)
  }

  deleteProductFromCart(product: Product) : void {
    const findIndex: any = productsQuote.findIndex((data: Product) => data.id === product.id);
    productsQuote.splice(findIndex, 1);
  }
  addCardInBasket(id: number): void {
    const cardBasket: any = this.products.find((products) => {
      return products.id === id;
    })
    productsQuote.push(cardBasket)
  }
}
