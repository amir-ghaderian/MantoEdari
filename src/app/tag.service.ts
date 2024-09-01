import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Array<Tag> = [
    { id: 0, title: "مانتو کتی", images: "assets/41.jpg" },
    { id: 1, title: "دو پی اس", images: "assets/553.JPG" },
    { id: 2, title: "ابایی", images: "assets/38.jpg" },
    { id: 3, title: "مناسب محل کار", images: "assets/3.jpg" },
    { id: 4, title: "اسپرت ", images: "assets/531.JPG" },
    { id: 5, title: " مجلسی  ", images: "assets/26.jpg" },
    { id: 6, title: " کت شلوار", images: "assets/10.jpg" },
    { id: 7, title: " کفتان", images: "assets/25.jpg" },
    { id: 8, title: " شومیز", images: "assets/538.JPG" },
  ];
  public getTagTitle(tagId: number): string {

    for (var i = 0; i < this.tags.length; i++) {
      if (tagId === this.tags[i].id) {
        return this.tags[i].title;
      }

  }
  return "-"

}
}
export class Tag {
  id: number;
  title: string;
  images: string;


  constructor(_id: number, _title: string, _image: string) {
    this.id = _id;
    this.title = _title;
    this.images = _image;
  }
}