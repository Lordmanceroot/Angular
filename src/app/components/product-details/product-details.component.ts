import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../../services/card.service";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
     product!: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private cardService: CardService,
              private quoteService: CartService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.product = this.cardService.getIdOfProduct(+id);
    }
  }

  addCardInBasket(id: number) {
    this.quoteService.addProductInBasket(id);
  }
}
