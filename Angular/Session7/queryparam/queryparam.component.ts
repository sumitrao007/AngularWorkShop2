import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
      this.route.queryParamMap
      .subscribe((param)=>{
        console.log("ID :: "+param.get("id"));
        console.log("Name :: "+param.get("name"));
        console.log("status :: "+param.get("status"));
      })
  }

}
