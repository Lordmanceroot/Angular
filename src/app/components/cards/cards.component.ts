import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {QuoteService} from "../../services/quote.service";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public data: Product[] = []
  title = 'Рекомендации для Вас'


  constructor(private productService: ProductService,
              private quoteService: QuoteService,
              private cardService: CardService
  ) {
  }

  ngOnInit(): void {
    this.data = this.productService.getProducts();
  }


  addQuote(id: number) {
    this.quoteService.cardInBasket(id)

  }

  cardProduct(item: Product) {
    this.cardService.setProducts(item)
  }
}
