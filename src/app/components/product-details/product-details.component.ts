import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../../services/card.service";
import {QuoteService} from "../../services/quote.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  data: any;

  constructor(private activatedRoute: ActivatedRoute,
              private cardService: CardService,
              private quoteService: QuoteService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    if (id) {
      this.data = this.cardService.getProduct(+id);
    }
  }

  addCardInBasket(id: number) {
    this.quoteService.addCardInBasket(id);
  }
}
