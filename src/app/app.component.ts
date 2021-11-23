import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal = false;
  public toggleCart(): void {
    this.showModal = !this.showModal;
  }
}
