import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {QuoteService} from "../../services/quote.service";
import {CardService} from "../../services/card.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription, take} from "rxjs";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  data: Product[] = [];

  constructor(private productService: ProductService,
              private quoteService: QuoteService,
              private cardService: CardService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.subscription = this.productService.getProducts()
      .pipe(take(1))
      .subscribe((products) => {
      this.data = products
    })
    console.log(this.data)
    // this.data = this.productService.getProducts();

    this.activatedRoute.queryParamMap.subscribe((params) => {
      const search = params.get('search') || '';
      this.data = this.cardService.getCardsProducts(search);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  addInBasket(id: number) {
    this.quoteService.addCardInBasket(id);
  }

  // skipToProductDetails(item: Product) {
  //   this.cardService.setProducts(item);
  // }
}
