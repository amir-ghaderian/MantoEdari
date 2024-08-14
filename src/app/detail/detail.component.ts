import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/product.service';
import { ShoppingService, Item } from '../shopping.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  isToggle: any;
  id: any;
  select: any;
  selectedImage: any;
  currentIndex: any;
  i = 0;
  cart: any;
  totalPriceItem: any;
  quntity: number = 1
  selectedImg: any;
  priceProduct: number = 0;
  show: boolean = false;
  constructor(private route: ActivatedRoute, private psv: ProductService, public cardService: ShoppingService) {
    this.cart = cardService.cart;
  }

  ngOnInit(): void {
    const stringId = this.route.snapshot.paramMap.get('id');

    if (stringId) {

      this.id = parseInt(stringId);

      this.psv.clothes.forEach((element: any) => {
        if (element.id === this.id) {
          this.select = element;
          this.selectedImage = this.select.images[0]
          this.priceProduct = this.select.price;

        }
      });


    } else {
      console.log('no id on url')
    }

  }
  showImg(i: number) {
    this.selectedImage = this.select.images[i]
    this.currentIndex = i


  }

  addShoppingCart() {
    this.show = true;
    this.totalPriceItem = this.quntity * this.select.price;
    let customObj = new Item(this.select._size, this.select.id, this.select.title, this.select.images[0], this.select.price, this.quntity, this.totalPriceItem)

    this.cardService.addToCart(customObj);


  }
  close() {
    this.show = false;
  }
}
