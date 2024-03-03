import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  public cart: Array<Item> = []


  public addToCart(item: Item) {
  let exist = false;
  for (let index = 0; index < this.cart.length; index++) {

    const element = this.cart[index];

    if (element.id === item.id) {
      exist = true;
      if (element.size === item.size) {
        element.quntitiy += item.quntitiy;
      } else {
        exist = false
      }
    }
  }
  if (exist == false) {
    this.cart.push(item);

  }

}
}
export class Item {
  size: string;
  id: number;
  title: string;
  images: any;
  price: string;
  quntitiy: number = 0;
  totalPrice: number = 0;
  constructor(public _size: string, _id: number, _title: string, _image: any, _price: string, _quntity: number, _totalPrice: number) {
    this.size = _size;
    this.id = _id;
    this.title = _title;
    this.images = _image;
    this.price = _price;
    this.quntitiy = _quntity;
    this.totalPrice = _totalPrice;
    
  }
}