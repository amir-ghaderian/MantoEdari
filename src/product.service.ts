import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Input() newPruduct: any = {
    title: "",
    id: 0,
    images: [""],
    price: 0,
    descroption: [""]

  }
  public clothes: any = [
    {
      title: " نواردوزی ", id: 1, images: ["assets/31.jpg"], banner: "assets/11.jpg", price: 699000, descroption: ["جنس پارچه: کرپ حریر",
        "مدل یقه: بدون یقه",
        "جلو باز",
        "برش عصایی"
        , "قد کار میدی",
        "بسته شدن : قزن"]
    },
    {
      title: "کت  پولک دوزی", id: 2, images: ["assets/26.jpg",], banner: "assets/11.jpg", price: 8999000, descroption: ["  جنس پارچه: کرپ مازراتی ",
        "مدل یقه: انگلیسی",
        "جلو لایی کشی شده",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", 
        "بسته شدن :  دکمه"]
    },
    {
      title: "مانتو کتی مازراتی", id: 3, images: ["assets/1.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg"], banner: "assets/11.jpg", price: 6999000, descroption: ["جنس پارچه: کرپ مازراتی",
        "مدل یقه: انگلیسی",
        "جلو لایی کشی شده",
        "برش عصایی2 عدد جیب"
        , "102:قد کت",
        "بسته شدن :   دکمه"]
    },
    {
      title: "مانتوهندی", id: 4, images: ["assets/23.jpg"], banner: "assets/23.jpg", price: 8999000, descroption: ["جنس پارچه: کرپ بابوس",
        "مدل یقه: گرد",
        "جلوباز ",
        "برش عصایی "
        , "132:قد کت", 
        "بسته شدن : کمربند"]
    },
    {
      title: "کفتان کرپ", id: 5, images: ["assets/25.jpg"], banner: "assets/11.jpg", price: 6999000, descroption: ["جنس پارچه: کرپ ",
        "مدل یقه: ستاره ای",
        "جلو بسته",
        "برش عصایی"
        , "142:قد کت", 
        "بسته شدن :جلو بسته "]
    },
    {
      title: "کت مازراتی مجلسی ", id: 6, images: ["assets/27.jpg","assets/29.jpg"], banner: "assets/11.jpg", price: 8999000, descroption: ["جنس پارچه: کرپ مازراتی",
        "مدل یقه:  انگلیسی",
        "جلو لایی کشی شده",
        "برش عصایی2 عدد جیب"
        , "102:قد کت",
        "بسته شدن:   دکمه"]
    },
    {
      title: " کپ نوار طلایی", id: 7, images: ["assets/28.jpg","assets/30.jpg"], banner: "assets/11.jpg", price: 6999000, descroption: ["جنس پارچه: کرپ حریر",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: " سوزن دوزی هندی", id: 8, images: ["assets/24.jpg"], banner: "assets/24.jpg", price: 8999000, descroption: ["جنس پارچه: کرپ بابوس",
        "مدل یقه:  گرد",
        "برش عصایی"
        , "102:قد کت",
        "بسته شدن: باز"]
    },
    {
      title: "مانتوفیونا", id: 100, images: ["assets/1.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg"], banner: "assets/11.jpg", price: 3999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 101, images: ["assets/2.jpg", "assets/14.jpg", "assets/15.jpg", "assets/18.jpg"], banner: "assets/10.jpg", price: 2999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 102, images: ["assets/3.jpg", "assets/5.jpg", "assets/7.jpg", "assets/8.jpg"], banner: "assets/9.jpg", price: 1999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 103, images: ["assets/4.jpg", "assets/13.jpg", "assets/11.jpg", "assets/20.jpg"], banner: "assets/8.jpg", price: 7999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 104, images: ["assets/4.jpg", "assets/3.jpg", "assets/2.jpg", "assets/20.jpg"], banner: "assets/7.jpg", price: 6999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 105, images: ["assets/6.jpg", "assets/21.jpg", "assets/1.jpg", "assets/20.jpg"], banner: "assets/2.jpg", price: 5999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 106, images: ["assets/7.jpg", "assets/20.jpg", "assets/15.jpg", "assets/1.jpg"], banner: "assets/3.jpg", price: 4999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 107, images: ["assets/18.jpg", "assets/11.jpg", "assets/5.jpg", "assets/1.jpg"], banner: "assets/4.jpg", price: 3999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 108, images: ["assets/9.jpg", "assets/12.jpg", "assets/14.jpg", "assets/16.jpg"], banner: "assets/5.jpg", price: 2999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 109, images: ["assets/1.jpg", "assets/10.jpg", "assets/2.jpg", "assets/5.jpg"], banner: "assets/1.jpg", price: 1999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 110, images: ["assets/11.jpg", "assets/1.jpg", "assets/2.jpg", "assets/3.jpg"], banner: "assets/6.jpg", price: 5999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 111, images: ["assets/12.jpg", "assets/4.jpg", "assets/3.jpg", "assets/2.jpg"], banner: "assets/12.jpg", price: 4999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 112, images: ["assets/13.jpg", "assets/2.jpg", "assets/12.jpg", "assets/5.jpg"], banner: "assets/13.jpg", price: 3999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 113, images: ["assets/14.jpg", "assets/12.jpg", "assets/2.jpg", "assets/1.jpg"], banner: "assets/14.jpg", price: 2999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    },
    {
      title: "مانتوفیونا", id: 114, images: ["assets/15.jpg", "assets/10.jpg", "assets/11.jpg", "assets/12.jpg"], banner: "assets/15.jpg", price: 1999000, descroption: ["جنس پارچه: کرپ فاستونی",
        "مدل یقه: ستاره ای",
        "جلو آستردار",
        "برش عصایی2 عدد جیب"
        , "102:قد کت", "102:قد شلوار ",
        "بسته شدن شلوار: زیپ و دکمه"]
    }
  ];
  ngOnInit(): void {
    this.clothes=this.clothes
  }
  public addNew() {
    let customObj = this.newPruduct;
    this.clothes.push({ title: customObj.title, id: customObj.id, imges:this.addImages(), descroption: customObj.descroption, price: customObj.price })
    console.log(this.clothes)
    console.log(customObj)
  }
  addImages(){
  this.newPruduct.images
  }
  constructor() { }


}
