import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private list: Product[] = [
      {
          "id": 1,
          "catId": "processor & video card",
          "name": "AMD Ryzen 7 3700X 8-Core 3.6GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 93310,
          "image": "../../src/assets/image/01.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 2,
          "catId": "processor & video card",
          "name": "AMD Ryzen 5 5600X 6-Core 3.7GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 99999,
          "image": "../../src/assets/image/02.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 3,
          "catId": "processor & video card",
          "name": "AMD Ryzen 5 3600 6-Core 3.6GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 99240,
          "image": "../../src/assets/image/03.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 4,
          "catId": "processor & video card",
          "name": "AMD Ryzen 7 5800X 8-Core 3.8GHz AM4 processzor",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 138170,
          "image": "../../src/assets/image/04.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 5,
          "catId": "processor & video card",
          "name": "Intel Core i5-10400F 6-Core 2.9GHz LGA1200",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 57880,
          "image": "../../src/assets/image/05.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 6,
          "catId": "processor & video card",
          "name": "AMD Ryzen 9 5900X 12-Core 3.7GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 179220,
          "image": "../../src/assets/image/06.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 7,
          "catId": "processor & video card",
          "name": "AMD Ryzen 5 1600 6-Core 3.2GHz AM4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 43600,
          "image": "../../src/assets/image/07.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 8,
          "catId": "processor & video card",
          "name": "Intel Core i3-10105F 4-Core 3.7GHz LGA1200",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 29630,
          "image": "../../src/assets/image/08.jpg",
          "stock": 10,
          "active": false,
          "featured": true
      },
      {
          "id": 9,
          "catId": "processor & video card",
          "name": "Intel Core i9-9900K 8-Core 3.6GHz LGA1151",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 115880,
          "image": "../../src/assets/image/09.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 10,
          "catId": "processor & video card",
          "name": "Intel Xeon Platinum 8280 28-Core 2.7GHz LGA3647",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 3830083,
          "image": "../../src/assets/image/10.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 11,
          "catId": "processor & video card",
          "name": "ZOTAC GeForce GTX 1070 Ti AMP Extreme 8GB GDDR5",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 172550,
          "image": "../../src/assets/image/11.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 12,
          "catId": "processor & video card",
          "name": "EVGA GeForce RTX 3060 XC GAMING 12GB",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 334990,
          "image": "../../src/assets/image/12.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 13,
          "catId": "processor & video card",
          "name": "GIGABYTE GeForce RTX 3070 8GB GDDR6 256bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 496395,
          "image": "../../src/assets/image/13.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 14,
          "catId": "processor & video card",
          "name": "ASUS GeForce RTX 3070 Ti OC 8GB GDDR6X 256bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 515935,
          "image": "../../src/assets/image/14.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 15,
          "catId": "processor & video card",
          "name": "ASUS GeForce RTX 3080 10GB GDDR6X 320bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 599990,
          "image": "../../src/assets/image/15.jpg",
          "stock": 12,
          "active": true,
          "featured": false
      },
      {
          "id": 16,
          "catId": "processor & video card",
          "name": "ASUS GeForce RTX 3080 Ti 12GB OC GDDR6X 384bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 828080,
          "image": "../../src/assets/image/16.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 17,
          "catId": "processor & video card",
          "name": "EVGA GeForce RTX 3090 FTW3 ULTRA GAMING 24GB GDDR6X",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 1299990,
          "image": "../../src/assets/image/17.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 18,
          "catId": "processor & video card",
          "name": "XFX Radeon RX 580 GTS XXX Edition 8GB GDDR5 256bit",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 263969,
          "image": "../../src/assets/image/18.jpg",
          "stock": 5,
          "active": false,
          "featured": false
      },
      {
          "id": 19,
          "catId": "processor & video card",
          "name": "PowerColor Radeon RX 6700XT Red Devil 12GB OC DDR6",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 384180,
          "image": "../../src/assets/image/19.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 20,
          "catId": "processor & video card",
          "name": "SAPPHIRE Radeon NITRO+ RX 6700 XT 12GB GDDR6",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 389990,
          "image": "../../src/assets/image/20.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 21,
          "catId": "processor & video card",
          "name": "Intel Celeron D 440 2GHz LGA775",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 999,
          "image": "../../src/assets/image/21.jpg",
          "stock": 15,
          "active": true,
          "featured": false
      },
      {
          "id": 22,
          "catId": "processor & video card",
          "name": "AFOX GeForce GT 220 1GB DDR3 (AF220-1024D3L2)",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 13970,
          "image": "../../src/assets/image/22.jpg",
          "stock": 73,
          "active": true,
          "featured": false
      },
      {
          "id": 23,
          "catId": "processor & video card",
          "name": "PNY Quadro RTX 8000 48GB GDDR6 384bit (VCQRTX8000-PB)",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 2517320,
          "image": "../../src/assets/image/23.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 24,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "MSI B450 TOMAHAWK MAX",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 27590,
          "image": "../../src/assets/image/24.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 25,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "MSI MAG B550 Tomahawk",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 48220,
          "image": "../../src/assets/image/25.jpg",
          "stock": 54,
          "active": true,
          "featured": false
      },
      {
          "id": 26,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "ASUS TUF GAMING B460M-PLUS",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 32520,
          "image": "../../src/assets/image/26.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 27,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "ASUS ROG Crosshair VIII Hero (WI-FI)",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 158110,
          "image": "../../src/assets/image/27.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 28,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "ASUS PRIME H410M-K",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 23040,
          "image": "../../src/assets/image/28.jpg",
          "stock": 65,
          "active": false,
          "featured": false
      },
      {
          "id": 29,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "ASUS ROG STRIX B550-F GAMING",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 62180,
          "image": "../../src/assets/image/29.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 30,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "MSI H310M PRO-VDH PLUS",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 14090,
          "image": "../../src/assets/image/30.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 31,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "GIGABYTE GA-A320M-H",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 19000,
          "image": "../../src/assets/image/31.jpg",
          "stock": 6,
          "active": true,
          "featured": false
      },
      {
          "id": 32,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "ASRock AM1B-M",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 9881,
          "image": "../../src/assets/image/32.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 33,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "ASUS ROG Maximus XIII Extreme Glacial",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 519400,
          "image": "../../src/assets/image/33.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 34,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "GIGABYTE Z590 AORUS XTREME WATERFORCE",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 708950,
          "image": "../../src/assets/image/34.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 35,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "Kingston HyperX FURY 16GB (2x8GB) DDR4 3200MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 32840,
          "image": "../../src/assets/image/35.jpg",
          "stock": 3,
          "active": true,
          "featured": false
      },
      {
          "id": 36,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "G.SKILL Aegis 16GB (2x8GB) DDR4 3200MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 28270,
          "image": "../../src/assets/image/36.jpg",
          "stock": 10,
          "active": false,
          "featured": false
      },
      {
          "id": 37,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "GeIL SUPER LUCE RGB 16GB (2x8GB) DDR4 4133MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 46790,
          "image": "../../src/assets/image/37.jpg",
          "stock": 20,
          "active": true,
          "featured": false
      },
      {
          "id": 38,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "CSX 512MB DDR 400MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 1890,
          "image": "../../src/assets/image/38.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 39,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "G.SKILL Trident Z Royal Elite 128GB (8x16GB) DDR4 3600MHz",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 780680,
          "image": "../../src/assets/image/39.jpg",
          "stock": 10,
          "active": true,
          "featured": false
      },
      {
          "id": 40,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "priceCTIC Freezer 34 eSports DUO",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 14820,
          "image": "../../src/assets/image/40.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 41,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "Fractal Design Celsius+ S24 Prisma",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 60160,
          "image": "../../src/assets/image/41.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 42,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "Y S Tech FD123010LB",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 231,
          "image": "../../src/assets/image/42.jpg",
          "stock": 30,
          "active": false,
          "featured": true
      },
      {
          "id": 43,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "Koolance ERM-3K3UA",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 739362,
          "image": "../../src/assets/image/43.jpg",
          "stock": 10,
          "active": false,
          "featured": true
      },
      {
          "id": 44,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "Samsung Odyssey G5 C27G55TQWR",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 101600,
          "image": "../../src/assets/image/44.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 45,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "LG 25UM58-P",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 49899,
          "image": "../../src/assets/image/45.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 46,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "ASUS VP249QGR",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 59990,
          "image": "../../src/assets/image/46.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 47,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "EIZO CG3145",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 9200000,
          "image": "../../src/assets/image/47.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 48,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "Provision-ISR PR-IPS7\/B",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 24670,
          "image": "../../src/assets/image/48.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 49,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "Samsung Odyssey G5 C34G55TWWR",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 160720,
          "image": "../../src/assets/image/49.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      },
      {
          "id": 50,
          "catId": "other hardwares (ram, monitor, cooler, motherboard)",
          "name": "17\" HP Pavilion MX70 CRT",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem, reiciendis, quos unde labore officiis voluptate aliquid aut saepe doloremque repudiandae neque omnis ullam temporibus voluptas adipisci facilis, at consequatur.",
          "price": 1000,
          "image": "../../src/assets/image/50.jpg",
          "stock": 10,
          "active": true,
          "featured": true
      }
  ];

  constructor() { }
}
