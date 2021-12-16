import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {products} from "../../mock/basket.mock";
import {QuoteService} from "../../services/quote.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: any;

  @Output()
  public onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(private quoteService: QuoteService) {
    this.basket = products
    console.log("basket:", this.basket)
  }

  ngOnInit(): void {
  }

  closeCart(): void {
    this.onCloseCart.emit();
  }

  cleanBasket() {
    products.length = 0
    console.log(this.basket)
  }

  deleteItemOfBasket(item: any): void {
    this.quoteService.deleteProductFromCart(item);
    console.log(this.basket)
  }
}
