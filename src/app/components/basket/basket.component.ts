import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {products} from "../../mock/basket.mock";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: any;

  @Output()
  public onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.basket = products
    console.log("basket:", this.basket)
  }

  ngOnInit(): void {
  }

  closeCart(): void {
    this.onCloseCart.emit();
  }

  removeBasket() {

  }
}
