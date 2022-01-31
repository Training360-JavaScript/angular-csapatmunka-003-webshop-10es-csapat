import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = []

  phrase: string = '';
  filterKey: string = 'name';
  // filterKeys: string[] = Object.keys(this.products[0]).slice(2);
  filterKeys: string[] = ['name', 'description', 'price', 'active', 'featured'];

  constructor() { }

  ngOnInit(): void {
  }

}
