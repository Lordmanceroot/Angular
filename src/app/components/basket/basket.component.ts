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

  public basket: Product[] = [];

  public count: number = 1;

  @Output()
  public onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(private quoteService: QuoteService) {
    this.basket = productsQuote;

    console.log("basket:", productsQuote)
  }

  ngOnInit(): void {
  }

  closeCart(): void {
    this.onCloseCart.emit();
  }

  cleanBasket() {
    productsQuote.length = 0;
    console.log(this.basket)
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
