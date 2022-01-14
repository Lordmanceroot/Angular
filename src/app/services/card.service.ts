import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {products} from "../mock/data.mock";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardItem: any = products
  setProducts(item: Product): void {
    this.cardItem = item
  }

  getProducts(): Product {
    return this.cardItem;
  }

  getProduct(id: number): void {
    const productID = this.cardItem.find((products: Product) => {
      return products.id === id
    })
    return productID
  }

  getCardsProducts(search: string = ''): Product[] {
    return this.cardItem.filter((item: any) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
