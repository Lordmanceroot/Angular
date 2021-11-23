import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Output()
  public onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  closeCart(): void {
    this.onCloseCart.emit();
  }

}
