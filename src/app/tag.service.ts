import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Array<Tag> = [
    { id: 0, title: "بدون چروک" },
    { id: 1, title: "جلوبسته" },
    { id: 2, title: "ابایی" },
    { id: 3, title: "زیپی" },
    { id: 4, title: "بدون دکمه" },
    { id: 5, title: " بدون رنگ دهی" },
    { id: 6, title: " جیبدار" },
  ];
  
}
export class Tag {
  id: number;
  title: string;


  constructor(_id: number, _title: string) {
    this.id = _id;
    this.title = _title;
  }
}