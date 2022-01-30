import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {

  @Input() fiveProducts: Product[] = [] // az 5 terméket hol jelölöm?

  constructor() { }

  ngOnInit(): void {
  }

}
