import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, ReplaySubject, Subject} from "rxjs";
import {productsQuote} from "../mock/basket.mock";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/products')
      .pipe(map(response => this.productList = response || []))
  };

  addProductInCart(id: number): void {
    const cardBasket: any = this.productList.find((products) => {
      return products.id === id;
    });
    productsQuote.push(cardBasket)
  };

  getProductById(id: number): Observable<Product | undefined> {
    const product$: Subject<Product | undefined> = new ReplaySubject(1);
    this.httpClient.get<Product[]>('/products')
      .subscribe((productList => {
        const product = productList.find((product) => product.id === id);
        product$.next(product);
      }));
    return product$.asObservable();
  }

  getCardsProducts(search: string = ''): Product[] {
    return this.productList.filter((item: any) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  };
}
