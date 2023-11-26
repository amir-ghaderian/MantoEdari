import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/product.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: any;
  constructor(public ps: ProductService) {
    this.items = ps.clothes;
  }

  ngOnInit(): void {
  }

}
