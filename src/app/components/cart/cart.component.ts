import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {productsQuote} from "../../mock/basket.mock";
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-basket',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output()
  onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  basket: Product[] = [];
  count: number = 1;

  constructor(private productService: ProductService) {
    this.basket = productsQuote;
  }

  ngOnInit(): void {
  }

  closeBasket(): void {
    this.onCloseCart.emit();
  }

  cleanBasket() {
    productsQuote.length = 0;
  }

  deleteItemOfBasket(item: any): void {
    this.productService.deleteProductFromCart(item);
  }

  decrease(): void {
    --this.count;
  }

  increase(): void {
    ++this.count;
  }
}
