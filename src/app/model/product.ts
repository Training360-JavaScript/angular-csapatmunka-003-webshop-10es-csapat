export class Product {
  [key: string]: any,
  id: number = 0;
  catId: number = 0;
  name: string = '';
  description: string = '';
  price: number = 0;
  image: string = '';
  stock: number = 0;
  active: boolean = true;
  featured: boolean = true;
}
