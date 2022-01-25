import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Subject, take} from "rxjs";


@Component({
  selector: 'app-cards',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Subject<Product[]> = new Subject();

  constructor(private productService: ProductService,
              private quoteService: CartService,
              private activatedRoute: ActivatedRoute) {
  };

  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe((products) => this.product.next(products));

    this.activatedRoute.queryParamMap
      .subscribe((params) => {
        const search = params.get('search') || '';
        this.product.next(this.productService.getCardsProducts(search));
      });
  }

  addInBasket(id: number) {
    this.productService.addProductInBasket(id);
  };
}
