import {Component, OnInit} from '@angular/core';
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
  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private cartService: CartService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.productService.getProductById(+id).subscribe(product => this.product = product);
    }
  };

  addCardInBasket(id: number): void {
    this.productService.getProductById(id)
      .subscribe(product => this.product = product);
    if (this.product) {
      this.cartService.productsCart.push(this.product);
    }
  };
}
