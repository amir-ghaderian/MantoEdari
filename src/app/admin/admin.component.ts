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
  add:any;
  constructor(private pruduSer: ProductService) {
    this.newPrudct = pruduSer.newPruduct;
  
  }

  ngOnInit(): void {
   
  }

addone(){
  this.pruduSer.addNew()
}
}
