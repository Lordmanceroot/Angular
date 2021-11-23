import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {products} from "../../mock/data.mock";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public data: Product[];

  constructor() {
    this.data = products
  }

  ngOnInit(): void {
  }

}
