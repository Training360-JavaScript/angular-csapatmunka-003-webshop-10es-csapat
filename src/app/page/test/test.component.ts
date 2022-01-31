import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { 
  }

  productId: number = 0;
  product: Product = new Product();

  getProduct() {
    this.productService.getProduct(this.productId).subscribe((product) => {
      this.product = product;
    })
  }

  onDelete() {
    this.productService.deleteProduct(this.productId).subscribe((ret) => {});
  }
  onUpdate() {
    this.productService.updateProduct(this.product).subscribe((ret) => {this.product = ret});
  }

  onCreate() {
    let product = new Product();
    product.id = 0;
    product.description = 'Lorem ipsum ....';
    product.name = this.product.name;
    this.productService.createProduct(product).subscribe((ret) => {this.product = ret});
  }

  ngOnInit(): void {
  }

}
