import { Component, OnInit } from '@angular/core';
import {
  Collapse,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initTE({ Collapse });
  }

}
