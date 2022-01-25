import {Product} from "../models/product.model";
import {productsQuote} from "../mock/basket.mock";
import {ProductService} from "./product.service";
import {take} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    // this.productService.getProducts()
    //   .pipe(take(1))
    //   .subscribe((products) => this.products = products)
  };



}
