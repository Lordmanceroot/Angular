import {Product} from "../models/product.model";
import {products} from "../mock/basket.mock";

export class QuoteService {

  addQuote(product: Product) {
    products.push(product)
  }

}
