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
  ) { }

  categoryId: number = 0;
  featuredProducts: Product[] = [];
  private subscribe!: Subscription;

  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params => {
      this.categoryId = +params['id']; // (+) converts string 'id' to a number
      this.productService.getCategoryFeaturedProducts(this.categoryId).subscribe((products: Product[]) => { 
        this.featuredProducts = products;
      });
   });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
