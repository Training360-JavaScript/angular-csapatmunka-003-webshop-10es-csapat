import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  products$: Observable<Product[]> = this.productService.getAll();

  sorterKey: string = 'id';
  sorterDirection: number = 1;

  phrase: string = '';
  filterKey: string = 'name';
  filterKeys: string[] = ['name', 'description', 'price', 'active', 'featured'];

  categories: Category[] = [];
  
  constructor(
    private productService: ProductService,
    private router: Router,
  ) {  }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

  onCancel(product: Product): void {
    this.products$ = this.productService.getAll();
  }

  onSave(product: Product): void {
    this.productService.updateProduct(product).subscribe(
      product => this.router.navigate(['/', 'product'])
      )
      this.products$ = this.productService.getAll();
  }

  onDelete(product: Product): void {
    this.productService.deleteProduct(product.id)
    this.router.navigate(['/', 'product'])
  }

  onSort(key: string): void {
    if (key === this.sorterKey) {
      this.sorterDirection *= -1;
    } else {
      this.sorterDirection = 1;
    }

    this.sorterKey = key;
  }
}
