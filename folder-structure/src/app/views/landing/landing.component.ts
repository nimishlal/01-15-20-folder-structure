import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private cardService: CartService) { }

  ngOnInit() {
  }

  onClick() {
    alert('Testing');
  }

  reset() {
    this.cardService.resetCount();
  }
}
