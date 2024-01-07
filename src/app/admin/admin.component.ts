import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/product.service';
import {
  Input,
  initTE,
} from "tw-elements";

initTE({ Input });
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  newPrudct: any;
  arrayOfImages: Array<string>=[]

  constructor(private pruduSer: ProductService) {
    this.newPrudct = pruduSer.newPruduct;
 
  }

  ngOnInit(): void {
   
  }

addone(){
  this.pruduSer.addNew()
}
addImage(){
 this.arrayOfImages.push(this.newPrudct.images)
 this.newPrudct.imges=''
 console.log(this.arrayOfImages)
}
}
