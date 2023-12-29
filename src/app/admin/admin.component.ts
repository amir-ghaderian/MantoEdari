import { Component, OnInit } from '@angular/core';
import {
  Input,
  initTE,
} from "tw-elements";

initTE({ Input });
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
