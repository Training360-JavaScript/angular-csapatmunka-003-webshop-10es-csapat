import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newProduct = new Product();
  categories: Category[]= [];

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(
      cat => this.categories = cat
    )
  }

  onAddProduct(product: Product): void {
    product.id = 0;
    this.productService.createProduct(product).subscribe(
     newProduct => this.router.navigate(['/', 'product'])
    );

  }
}
