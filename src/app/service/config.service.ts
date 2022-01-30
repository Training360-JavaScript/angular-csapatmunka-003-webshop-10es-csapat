import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { ProductService } from './product.service';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Sample Webshop';

  menuItems: IMenuItem[] = [];

  constructor(
    private productService: ProductService
  ) {
    this.menuItems = [
      {text: 'Home', link: '/', icon: 'home'},
    ];

    this.productService.getCategories().subscribe((categories: Category[]) => {
      categories.forEach((category: Category) => {
        this.menuItems.push({ text: category.name, link: `category/${category.id}`});
      });
    });
  }
}
