import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {QuoteService} from "../../services/quote.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public data: Product[] = []
  public cardBasket: any

  constructor(private productService: ProductService,
              private quoteService: QuoteService
  ) {
  }

  ngOnInit(): void {
    this.data = this.productService.getProduct();
  }

  cardInBasket(id: number): void {
    this.cardBasket = this.data.find((products) => {
      return products.id === id
    })
    this.quoteService.addQuote(this.cardBasket)
    console.log("кнопка по карточке", this.cardBasket)

  }
}
