import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {productsQuote} from "../mock/basket.mock";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/products')
      .pipe(map(response => {
        if (response) {
          return this.productList = response;
        }
          return []
      }))
  };

  addProductInBasket(id: number): void {
    const cardBasket: any = this.productList.find((products) => {
      return products.id === id;
    });
    productsQuote.push(cardBasket)
  };

  getIdOfProduct(id: number): Product | null {
    const product = this.productList.find((products: Product) => {
      return products.id === id;
    });
      return product ? product : null;
  }

  getCardsProducts(search: string = ''): Product[] {
    return this.productList.filter((item: any) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  };
}
