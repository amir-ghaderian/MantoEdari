import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  features: Array<tag> = [
    { id: 0, title: "بدون چروک" },
    { id: 1, title: "جلو دکمه‌دار" },
    { id: 2, title: "جلو بسته" },
    { id: 3, title: "بدون یقه" },
    { id: 4, title: "یقه انگلیسی" },
    { id: 5, title: "بلند ماکسی" },
    { id: 6, title: "پارچه نخی" },
    { id: 7, title: "پارچه بدون چروک" },
  ];
 
  
  public getTagTitle(tagId: number): string {

    for (var i = 0; i < this.features.length; i++) {
      if (tagId === this.features[i].id) {
        return this.features[i].title;
      }

  }
  return "-"

}
}
export class tag {
  id: number;
  title: string;

  constructor(_id: number, _title: string) {
    this.id = _id;
    this.title = _title;
  }


 
}
