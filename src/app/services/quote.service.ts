import {Product} from "../models/product.model";
import {products} from "../mock/basket.mock";

export class QuoteService {


  addQuote(product: Product) {
    products.push(product)

  }

  deleteProductFromCart(product: Product) : void {
    const findIndex: any = products.findIndex((data: Product) => data.id === product.id);
    products.splice(findIndex, 1);
  }
}
