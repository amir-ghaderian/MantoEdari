import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/product.service';
import {
  Input,
  initTE,
} from "tw-elements";
import { UploadService } from '../upload.service';


initTE({ Input });
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  newPrudct: any;
  arrayOfImages: Array<string> = []
  goz: any
  file: any;
  constructor(private pruduSer: ProductService,  private uploadService: UploadService) {
    this.newPrudct = pruduSer.newPruduct;
    this.goz = uploadService.uploadfile

  }

  ngOnInit(): void {

  }

  addone() {
    this.pruduSer.addNew()
  }
  addImage() {
    this.arrayOfImages.push(this.newPrudct.images)
    this.newPrudct.imges = ''
    console.log(this.arrayOfImages)
  }
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  
  upload() {
    if (this.file) {
      this.uploadService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }
}
