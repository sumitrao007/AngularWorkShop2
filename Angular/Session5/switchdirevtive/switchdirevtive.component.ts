import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirevtive',
  templateUrl: './switchdirevtive.component.html',
  styleUrls: ['./switchdirevtive.component.css']
})
export class SwitchdirevtiveComponent implements OnInit {
mycolor:string='';
  constructor() { }

  ngOnInit() {
  }

  OnClick(color:string){
    this.mycolor=color.toLowerCase().trim();
  }

}
