import { Component, OnInit } from '@angular/core';
import {QuoteService} from "../../services/quote.service";
import {CardService} from "../../services/card.service";


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  data: any;

  constructor(private cardService: CardService,
              private quoteService: QuoteService ) { }

  ngOnInit(): void {
    this.data = this.cardService.cardItem;
  }

  addQuote(id: number) {
    this.quoteService.addCardInBasket(id);
  }
}
