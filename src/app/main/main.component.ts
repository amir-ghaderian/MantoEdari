import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/product.service';
import { Carousel, initTE, } from "tw-elements";
import { TagService } from '../tag.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: any;
  isToggle: any;
  tags: any;
  selectedTags: Array<number> = [];
  filtered: number[] = []
  filterList: any;
  product: any;
  currentImge: string[] = [];
  currentIndex: number[] = [];
  constructor(public ps: ProductService, tagServise: TagService) {
    this.items = ps.clothes;
    this.filterList=this.items;
    this.tags = tagServise.tags;
    
  }

  ngOnInit(): void {
    this.renderList()
    initTE({ Carousel });

    
  }
  setFilter(id: number) {
   
    
    if (this.selectedTags.indexOf(id) === -1) {
      this.selectedTags.push(id)
    } else {
      let location = this.selectedTags.lastIndexOf(id);
      this.selectedTags.splice(location, 1)
    }
    console.log(this.selectedTags)
    this.filtered = []
    for (var i = 0; i < this.selectedTags.length; i++) {
      let selectedTag = this.selectedTags[i];
      for (var j = 0; j < this.items.length; j++) {

        let product = this.items[j];
        for (var c = 0; c < product.tagId.length; c++) {

          if (selectedTag === product.tagId[c]) {

            if (this.filtered.indexOf(product) === -1) {
              this.filtered.push(product);
            }
          }
        }
      }
    }

    if (this.selectedTags.length === 0) {
      this.filterList = this.product
    } else {
      this.filterList = this.filtered;

      this.renderList()
    }
    this.renderList()

  }
  renderList() {
    this.currentImge = []
    this.currentIndex = []
    for (var i = 0; i < this.filterList.length; i++) {
      this.currentImge.push(this.filterList[i].images[0].url)
      this.currentIndex.push(0)
    }
  }
}
