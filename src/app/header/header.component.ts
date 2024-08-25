import { Component, ElementRef, OnInit } from '@angular/core';
import {
  Collapse,
  initTE,
} from "tw-elements";
@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
show:boolean=true;
  constructor(private _eref: ElementRef) { }
  onClick(event: { target: any; }) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.show=false;
   

    }
  }
  inClick(){
    this.show=true;
  }
  
  ngOnInit(): void {
    this.show=true
    initTE({ Collapse });
  }

}
