import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscriber } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  private apiUrl: string = 'http://localhost:3000/products';

  //#region categories

  private categoryList: Category[] = [
    {
      "id": 1,
      "name": "Processor & Video Card",
      "description": "processor & video card"
    },

    {
      "id": 2,
      "name": "Other hardwares",
      "description": "other hardwares (ram, monitor, cooler, motherboard)"
    }
  ]

  //A fentihez hasonlóan visszaadja az összes kategóriát (nálunk 2)
  getCategories(): Observable<Category[]> {
    return new Observable((subscriber: Subscriber<Category[]>) => {
      subscriber.next(this.categoryList);
    });
  }

  //#endregion

  //#region products

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  //ha a search pattern üres (vagy null vagy undefined) akkor a teljes products-ot visszaadja
  //ha nem üres, akkor szűrjön a searchKey tulajdonság alapján
  getProducts(searchPattern: string, searchKey: string = "name"): Observable<Product[]> {
    let url = this.apiUrl;
    if (searchKey && searchPattern) {
      url += `?${searchKey}=${searchPattern}`;
    }
    return this.http.get<Product[]>(url);
  }

  //Az első 5 olyan terméket adja vissza, aminél a featured true
  getFeaturedProducts(): Observable<Product[]> {
    let url = this.apiUrl + `?featured=true&_start=0&_limit=5`;
    return this.http.get<Product[]>(url);
  }

  //Random 5 terméket ad vissza
  getSaleProducts(): Observable<Product[]> {
    return this.getAll().pipe(map((products) => products
      .sort(() => Math.random() - Math.random())
      .slice(0, 5)
    ));
  }

  //#endregion

  //#region categoryproducts

  //catId alapján szűri a termékeket
  getCategoryProducts(catId: number): Observable<Product[]> {
    let url = this.apiUrl + `?catId=${catId}`;
    return this.http.get<Product[]>(url);
  }

  //catId és featured alapján szűr és az első 5db-ot adja vissza
  getCategoryFeaturedProducts(catId: number): Observable<Product[]> {
    let url = this.apiUrl + `?featured=true&catId=${catId}&_start=0&_limit=5`;
    return this.http.get<Product[]>(url);
  }

  //#endregion

  //#region product

  getProduct(id: number): Observable<Product> {
    let url = this.apiUrl + `/${id}`;
    return this.http.get<Product>(url);
  }

  updateProduct(product: Product): Observable<Product> {
    let url = this.apiUrl + `/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  createProduct(product: Product): Observable<Product> {
    let url = this.apiUrl;
    return this.http.post<Product>(url, product);
  }

  deleteProduct(id: Number): Observable<Product> {
    let url = this.apiUrl + `/${id}`;
    return this.http.delete<Product>(url);
  }

  //#endregion

}

