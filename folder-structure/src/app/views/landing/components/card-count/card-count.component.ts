import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.scss']
})
export class CardCountComponent implements OnInit {
  cartCount = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartCount.subscribe(count => {
      this.cartCount = count;
    });
  }

}
