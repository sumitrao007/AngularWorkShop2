import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  count:number=0;
  result:number;
  name:string='';
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.count==0){
      console.log("Event Occur!!!...");
      this.count++;
    }
    
  }

  OnImageClick(){
    console.log("Click Event Occur....");
  }
  onSend(inputname){
    console.log(inputname);
    console.log("=========== "+inputname.value)
    inputname.style.color='red';
  }

  onAddition(num1,num2){
      console.log(num1+" "+num2);
      let n1=+num1; //convert string to number
      let n2=+num2;
      this.result=n1+n2;
  }


}
