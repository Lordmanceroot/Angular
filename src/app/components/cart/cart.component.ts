import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {productsQuote} from "../../mock/basket.mock";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";

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

  constructor(private quoteService: CartService) {
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
    this.quoteService.deleteProductFromCart(item);
  }

  decrease(): void {
    --this.count;
  }

  increase(): void {
    ++this.count;
  }
}
