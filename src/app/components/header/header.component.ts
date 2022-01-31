import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  search = '';
  @Output()
  public onOpenCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {
  }

  public openCart(): void {
    this.onOpenCart.emit();
  }

  onSearch(): void {
    this.router.navigate([''], {
      queryParams: {
        search: this.search
      }
    });
  }
}
