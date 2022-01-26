import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
     product!: Product | null;

  constructor(private activatedRoute: ActivatedRoute,
              private quoteService: CartService,
              private productService: ProductService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.product = this.productService.getIdOfProduct(+id);
    }
  };

  addCardInBasket(id: number) {
    this.productService.addProductInBasket(id);
  };

}
