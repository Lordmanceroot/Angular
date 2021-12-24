import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardItem: any
  setProducts(item: Product): void {
    this.cardItem = item
  }
  getProducts(): Product {
    return this.cardItem;
  }
}
