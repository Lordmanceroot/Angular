import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-basket',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Output()
  onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  cart: Product[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getProductCart()
  }

  closeBasket(): void {
    this.onCloseCart.emit();
  }

  cleanBasket() {
    this.cartService.cleanCart()
  }

  deleteItemOfBasket(item: any): void {
    this.cartService.deleteProductFromCart(item);
  }

}
