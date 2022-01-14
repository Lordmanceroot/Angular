import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = '';
  @Output()
  public onOpenCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
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
