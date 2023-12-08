import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/product.service';

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
  constructor(private route: ActivatedRoute, private psv: ProductService) { }

  ngOnInit(): void {
    const stringId = this.route.snapshot.paramMap.get('id');

    if (stringId) {

      this.id = parseInt(stringId);

      this.psv.clothes.forEach((element: any) => {
        if (element.id === this.id) {
          this.select = element;
          this.selectedImage=this.select.banner;


        }
      });


    } else {
      console.log('no id on url')
    }

  }

}
