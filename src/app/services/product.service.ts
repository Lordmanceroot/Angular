import {Product} from "../models/product.model";
import {products} from "../mock/data.mock";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return products;
  }
}
