import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  private list: Product[] = [
      {
          "id": 1,
          "catId": 1,
          "name": "AMD Ryzen 7 3700X 8-Core 3.6GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 93310,
          "image": "/assets/image/01.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 2,
          "catId": 1,
          "name": "AMD Ryzen 5 5600X 6-Core 3.7GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 99999,
          "image": "assets/image/02.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 3,
          "catId": 1,
          "name": "AMD Ryzen 5 3600 6-Core 3.6GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 99240,
          "image": "assets/image/03.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 4,
          "catId": 1,
          "name": "AMD Ryzen 7 5800X 8-Core 3.8GHz AM4 processzor",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 138170,
          "image": "assets/image/04.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 5,
          "catId": 1,
          "name": "Intel Core i5-10400F 6-Core 2.9GHz LGA1200",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 57880,
          "image": "assets/image/05.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 6,
          "catId": 1,
          "name": "AMD Ryzen 9 5900X 12-Core 3.7GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 179220,
          "image": "assets/image/06.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 7,
          "catId": 1,
          "name": "AMD Ryzen 5 1600 6-Core 3.2GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 43600,
          "image": "assets/image/07.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 8,
          "catId": 1,
          "name": "Intel Core i3-10105F 4-Core 3.7GHz LGA1200",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 29630,
          "image": "assets/image/08.jpg",
          "stock": 10,
          "active": false,
          "featured": true
      },
      {
          "id": 9,
          "catId": 1,
          "name": "Intel Core i9-9900K 8-Core 3.6GHz LGA1151",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 115880,
          "image": "assets/image/09.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 10,
          "catId": 1,
          "name": "Intel Xeon Platinum 8280 28-Core 2.7GHz LGA3647",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 3830083,
          "image": "assets/image/10.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 11,
          "catId": 1,
          "name": "ZOTAC GeForce GTX 1070 Ti AMP Extreme 8GB GDDR5",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 172550,
          "image": "assets/image/11.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 12,
          "catId": 1,
          "name": "EVGA GeForce RTX 3060 XC GAMING 12GB",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 334990,
          "image": "assets/image/12.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 13,
          "catId": 1,
          "name": "GIGABYTE GeForce RTX 3070 8GB GDDR6 256bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 496395,
          "image": "assets/image/13.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 14,
          "catId": 1,
          "name": "ASUS GeForce RTX 3070 Ti OC 8GB GDDR6X 256bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 515935,
          "image": "assets/image/14.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 15,
          "catId": 1,
          "name": "ASUS GeForce RTX 3080 10GB GDDR6X 320bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 599990,
          "image": "assets/image/15.jpg",
          "stock": 12,
          "active": true,
          "featured": false
      },
      {
          "id": 16,
          "catId": 1,
          "name": "ASUS GeForce RTX 3080 Ti 12GB OC GDDR6X 384bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 828080,
          "image": "assets/image/16.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 17,
          "catId": 1,
          "name": "EVGA GeForce RTX 3090 FTW3 ULTRA GAMING 24GB GDDR6X",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 1299990,
          "image": "assets/image/17.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 18,
          "catId": 1,
          "name": "XFX Radeon RX 580 GTS XXX Edition 8GB GDDR5 256bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 263969,
          "image": "assets/image/18.jpg",
          "stock": 5,
          "active": false,
          "featured": false
      },
      {
          "id": 19,
          "catId": 1,
          "name": "PowerColor Radeon RX 6700XT Red Devil 12GB OC DDR6",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 384180,
          "image": "assets/image/19.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 20,
          "catId": 1,
          "name": "SAPPHIRE Radeon NITRO+ RX 6700 XT 12GB GDDR6",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 389990,
          "image": "assets/image/20.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 21,
          "catId": 1,
          "name": "Intel Celeron D 440 2GHz LGA775",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 999,
          "image": "assets/image/21.jpg",
          "stock": 15,
          "active": true,
          "featured": false
      },
      {
          "id": 22,
          "catId": 1,
          "name": "AFOX GeForce GT 220 1GB DDR3 (AF220-1024D3L2)",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 13970,
          "image": "assets/image/22.jpg",
          "stock": 73,
          "active": true,
          "featured": false
      },
      {
          "id": 23,
          "catId": 1,
          "name": "PNY Quadro RTX 8000 48GB GDDR6 384bit (VCQRTX8000-PB)",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 2517320,
          "image": "assets/image/23.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 24,
          "catId": 2,
          "name": "MSI B450 TOMAHAWK MAX",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 27590,
          "image": "assets/image/24.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 25,
          "catId": 2,
          "name": "MSI MAG B550 Tomahawk",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 48220,
          "image": "assets/image/25.jpg",
          "stock": 54,
          "active": true,
          "featured": false
      },
      {
          "id": 26,
          "catId": 2,
          "name": "ASUS TUF GAMING B460M-PLUS",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 32520,
          "image": "assets/image/26.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 27,
          "catId": 2,
          "name": "ASUS ROG Crosshair VIII Hero (WI-FI)",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 158110,
          "image": "assets/image/27.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 28,
          "catId": 2,
          "name": "ASUS PRIME H410M-K",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 23040,
          "image": "assets/image/28.jpg",
          "stock": 65,
          "active": false,
          "featured": false
      },
      {
          "id": 29,
          "catId": 2,
          "name": "ASUS ROG STRIX B550-F GAMING",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 62180,
          "image": "assets/image/29.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 30,
          "catId": 2,
          "name": "MSI H310M PRO-VDH PLUS",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 14090,
          "image": "assets/image/30.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 31,
          "catId": 2,
          "name": "GIGABYTE GA-A320M-H",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 19000,
          "image": "assets/image/31.jpg",
          "stock": 6,
          "active": true,
          "featured": false
      },
      {
          "id": 32,
          "catId": 2,
          "name": "ASRock AM1B-M",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 9881,
          "image": "assets/image/32.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 33,
          "catId": 2,
          "name": "ASUS ROG Maximus XIII Extreme Glacial",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 519400,
          "image": "assets/image/33.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 34,
          "catId": 2,
          "name": "GIGABYTE Z590 AORUS XTREME WATERFORCE",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 708950,
          "image": "assets/image/34.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 35,
          "catId": 2,
          "name": "Kingston HyperX FURY 16GB (2x8GB) DDR4 3200MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 32840,
          "image": "assets/image/35.jpg",
          "stock": 3,
          "active": true,
          "featured": false
      },
      {
          "id": 36,
          "catId": 2,
          "name": "G.SKILL Aegis 16GB (2x8GB) DDR4 3200MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 28270,
          "image": "assets/image/36.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 37,
          "catId": 2,
          "name": "GeIL SUPER LUCE RGB 16GB (2x8GB) DDR4 4133MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 46790,
          "image": "assets/image/37.jpg",
          "stock": 20,
          "active": true,
          "featured": false
      },
      {
          "id": 38,
          "catId": 2,
          "name": "CSX 512MB DDR 400MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 1890,
          "image": "assets/image/38.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 39,
          "catId": 2,
          "name": "G.SKILL Trident Z Royal Elite 128GB (8x16GB) DDR4 3600MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 780680,
          "image": "assets/image/39.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 40,
          "catId": 2,
          "name": "priceCTIC Freezer 34 eSports DUO",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 14820,
          "image": "assets/image/40.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 41,
          "catId": 2,
          "name": "Fractal Design Celsius+ S24 Prisma",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 60160,
          "image": "assets/image/41.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 42,
          "catId": 2,
          "name": "Y S Tech FD123010LB",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 231,
          "image": "assets/image/42.jpg",
          "stock": 30,
          "active": false,
          "featured": true
      },
      {
          "id": 43,
          "catId": 2,
          "name": "Koolance ERM-3K3UA",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 739362,
          "image": "assets/image/43.jpg",
          "stock": 10,
          "active": false,
          "featured": true
      },
      {
          "id": 44,
          "catId": 2,
          "name": "Samsung Odyssey G5 C27G55TQWR",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 101600,
          "image": "assets/image/44.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 45,
          "catId": 2,
          "name": "LG 25UM58-P",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 49899,
          "image": "assets/image/45.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 46,
          "catId": 2,
          "name": "ASUS VP249QGR",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 59990,
          "image": "assets/image/46.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 47,
          "catId": 2,
          "name": "EIZO CG3145",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 9200000,
          "image": "assets/image/47.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 48,
          "catId": 2,
          "name": "Provision-ISR PR-IPS7\/B",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 24670,
          "image": "assets/image/48.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 49,
          "catId": 2,
          "name": "Samsung Odyssey G5 C34G55TWWR",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 160720,
          "image": "assets/image/49.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 50,
          "catId": 2,
          "name": "17\" HP Pavilion MX70 CRT",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 1000,
          "image": "assets/image/50.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      }
  ];


  constructor() { }

  getAll(): Product[] {
    return this.list;
  }


  //ha a search pattern üres (vagy null vagy undefined) akkor a teljes products-ot visszaadja
  //ha nem üres, akkor szűrjön a searchKey tulajdonság alapján
  getProducts(searchPattern: string, searchKey: string = "name"): Observable<Product[]> {
    return new Observable((subscriber: Subscriber<Product[]>) => {
        if (searchPattern) {
            subscriber.next(this.list.filter(item => item[searchKey] === searchPattern));
        } else {
            subscriber.next(this.list);
        }
    });
  }

  //A fentihez hasonlóan visszaadja az összes kategóriát (nálunk 2)
  getCategories(): Observable<Category[]> {
    return new Observable((subscriber: Subscriber<Category[]>) => {
        subscriber.next(this.categoryList);
    });
  }

  //Az első 5 olyan terméket adja vissza, aminél a featured true
  getFeaturedProducts(): Observable<Product[]> {
    return new Observable((subscriber: Subscriber<Product[]>) => {
        subscriber.next(this.list
            .filter((item) => item.featured)
            .sort(() => Math.random() - Math.random())
            .slice(0, 5));
    });
  }

  //Random 5 terméket ad vissza
  getSaleProducts(): Observable<Product[]> {
    return new Observable((subscriber: Subscriber<Product[]>) => {
        subscriber.next(this.list
            .sort(() => Math.random() - Math.random())
            .slice(0, 5));
    });
  }

  //catId alapján szűri a termékeket
  getCategoryProducts(catId: number): Observable<Product[]> {
    return new Observable((subscriber: Subscriber<Product[]>) => {
        subscriber.next(this.list
            .filter((item) => item.catId === catId));
    });
  }

  //catId és featured alapján szűr és az első 5db-ot adja vissza
  getCategoryFeaturedProducts(catId: number): Observable<Product[]> {
    return new Observable((subscriber: Subscriber<Product[]>) => {
        subscriber.next(this.list
            .filter((item) => item.catId === catId && item.featured)
            .slice(0, 5));
    });
  }

}

