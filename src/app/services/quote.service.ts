import {Product} from "../models/product.model";
import {productsQuote} from "../mock/basket.mock";
import {products} from "../mock/data.mock";
export class QuoteService {




  deleteProductFromCart(product: Product) : void {
    const findIndex: any = productsQuote.findIndex((data: Product) => data.id === product.id);
    productsQuote.splice(findIndex, 1);
  }

  cardProduct(product: Product) : void {
    const findIndex: any = productsQuote.findIndex((data: Product) => data.id === product.id);
    productsQuote.push(findIndex);
  }

  public cardInBasket(id: number): void {
    const cardBasket: any = products.find((products) => {
      return products.id === id
    })
    productsQuote.push(cardBasket)

    console.log("кнопка по карточке", cardBasket)

  }
}
