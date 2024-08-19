import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Array<Tag> = [
    { id: 0, title: "مانتو کتی" },
    { id: 1, title: "دو پی اس" },
    { id: 2, title: "ابایی" },
    { id: 3, title: "مناسب محل کار" },
    { id: 4, title: "اسپرت " },
    { id: 5, title: " مجلسی  " },
    { id: 6, title: " کت شلوار" },
    { id: 7, title: " کفتان" },
    { id: 8, title: " شومیز" },
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