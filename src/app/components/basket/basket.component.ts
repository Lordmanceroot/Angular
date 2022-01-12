import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {productsQuote} from "../../mock/basket.mock";
import {QuoteService} from "../../services/quote.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Output()
  basket: Product[] = [];
  count: number = 1;
  onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(private quoteService: QuoteService) {
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
