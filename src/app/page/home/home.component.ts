import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService
    ) {
      this.featuredSubscribe = this.productService.getFeaturedProducts().subscribe((products: Product[]) => {
        this.featuredProducts = products;
      });
      this.saleSubscribe = this.productService.getSaleProducts().subscribe((products: Product[]) => {
        this.saleProducts = products;
      });
    }

  private featuredSubscribe!: Subscription;
  private saleSubscribe!: Subscription;

  featuredProducts: Product[] = [];
  saleProducts: Product[] = [];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.featuredSubscribe.unsubscribe();
    this.saleSubscribe.unsubscribe();
  }

}
