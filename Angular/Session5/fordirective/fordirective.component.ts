import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

arrObj=[
  {
    name:"samsung",
    price:20000,
    quantity:1
  },
  {
    name:"Motorolla",
    price:30000,
    quantity:1
  },
  {
    name:"OnePlus",
    price:35000,
    quantity:1
  },
  {
    name:"RealMe",
    price:18000,
    quantity:1
  },
  {
    name:"Nokia",
    price:10000,
    quantity:1
  }
];

  constructor() { }

  ngOnInit() {
  }

}
