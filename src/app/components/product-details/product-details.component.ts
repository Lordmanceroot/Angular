import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {productsQuote} from "../../mock/basket.mock";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private quoteService: CartService,
              private productService: ProductService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.productService.getProductById(+id).subscribe(product => this.product = product)
    }
  };

  addCardInBasket(id: number) {
    this.productService.getProductById(id)
      .subscribe(product => this.product = product)
    if (this.product) {
      productsQuote.push(this.product)
    }
  };
}
