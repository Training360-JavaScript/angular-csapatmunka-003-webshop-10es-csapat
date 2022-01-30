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

  // products: any[] = [
  //   {
  //     "id": 41,
  //     "catId": 2,
  //     "name": "Fractal Design Celsius+ S24 Prisma",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 60160,
  //     "image": "/assets/image/41.jpg",
  //     "stock": 10,
  //     "active": true,
  //     "featured": true
  //   },
  //   {
  //     "id": 42,
  //     "catId": 2,
  //     "name": "Y S Tech FD123010LB",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 231,
  //     "image": "/assets/image/42.jpg",
  //     "stock": 30,
  //     "active": false,
  //     "featured": true
  //   },
  //   {
  //     "id": 43,
  //     "catId": 2,
  //     "name": "Koolance ERM-3K3UA",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 739362,
  //     "image": "/assets/image/43.jpg",
  //     "stock": 10,
  //     "active": false,
  //     "featured": true
  //   },
  //   {
  //     "id": 44,
  //     "catId": 2,
  //     "name": "Samsung Odyssey G5 C27G55TQWR",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 101600,
  //     "image": "/assets/image/44.jpg",
  //     "stock": 10,
  //     "active": true,
  //     "featured": true
  //   },
  //   {
  //     "id": 45,
  //     "catId": 2,
  //     "name": "LG 25UM58-P",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 49899,
  //     "image": "/assets/image/45.jpg",
  //     "stock": 10,
  //     "active": true,
  //     "featured": true
  //   },
  //   {
  //     "id": 46,
  //     "catId": 2,
  //     "name": "ASUS VP249QGR",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 59990,
  //     "image": "/assets/image/46.jpg",
  //     "stock": 10,
  //     "active": true,
  //     "featured": true
  //   },
  //   {
  //     "id": 47,
  //     "catId": 2,
  //     "name": "EIZO CG3145",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 9200000,
  //     "image": "/assets/image/47.jpg",
  //     "stock": 10,
  //     "active": true,
  //     "featured": true
  //   },
  //   {
  //     "id": 48,
  //     "catId": 2,
  //     "name": "Provision-ISR PR-IPS7\/B",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 24670,
  //     "image": "/assets/image/48.jpg",
  //     "stock": 10,
  //     "active": true,
  //     "featured": true
  //   },
  //   {
  //     "id": 49,
  //     "catId": 2,
  //     "name": "Samsung Odyssey G5 C34G55TWWR",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 160720,
  //     "image": "/assets/image/49.jpg",
  //     "stock": 10,
  //     "active": true,
  //     "featured": true
  //   },
  //   {
  //     "id": 50,
  //     "catId": 2,
  //     "name": "17\" HP Pavilion MX70 CRT",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
  //     "price": 1000,
  //     "image": "/assets/image/50.jpg",
  //     "stock": "1",
  //     "active": true,
  //     "featured": true
  //   }
  // ]

  // phrase: string = '';
  // filterKey: string = 'name';
  // filterKeys: string[] = Object.keys(this.products[0]).slice(2);

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
