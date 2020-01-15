import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  items: any[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  constructor(private cardService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cardService.addToCart();
  }

}
