import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.routeSubscribe = this.route.params.subscribe(params => {
      this.categoryId = +params['categoryId']; // (+) converts string to a number
      this.featuredSubscribe = this.productService.getCategoryFeaturedProducts(this.categoryId).subscribe((products: Product[]) => { 
        this.featuredProducts = products;
      });
      this.productSubscribe = this.productService.getCategoryProducts(this.categoryId).subscribe((products: Product[]) => {
        this.products = products;
      });
    });
   }

  categoryId: number = 0;
  featuredProducts: Product[] = [];
  products: Product[] = [];
  private routeSubscribe!: Subscription;
  private featuredSubscribe!: Subscription;
  private productSubscribe!: Subscription;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSubscribe.unsubscribe();
    this.featuredSubscribe.unsubscribe();
    this.productSubscribe.unsubscribe();
  }

}
