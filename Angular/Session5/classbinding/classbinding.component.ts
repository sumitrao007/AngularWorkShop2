import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string='success';
  isError:boolean=false;
  isSpecial:boolean=true;

  myjson={
    "success":!this.isError,
    'danger': this.isError,
    "special":this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
