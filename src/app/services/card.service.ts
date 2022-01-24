import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {products} from "../mock/data.mock";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  products: any = products;

  getIdOfProduct(id: number): Product {
    return this.products.find((products: Product) => {
      return products.id === id;
    });
  };

  getCardsProducts(search: string = ''): Product[] {
    return this.products.filter((item: any) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  };
}
