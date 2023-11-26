import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public clothes: any = [
    { title: "مانتوفیونا", id: 100, images: "assets/1.jpg", price: 3999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/2.jpg", price: 2999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/3.jpg", price: 1999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/4.jpg", price: 7999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/5.jpg", price: 6999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/6.jpg", price: 5999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/7.jpg", price: 4999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/8.jpg", price: 3999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/9.jpg", price: 2999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/10.jpg", price: 1999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/11.jpg", price: 5999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/12.jpg", price: 4999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/13.jpg", price: 3999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/14.jpg", price: 2999000 },
    { title: "مانتوفیونا", id: 100, images: "assets/15.jpg", price: 1999000 }
  ];
  constructor() { }


}
