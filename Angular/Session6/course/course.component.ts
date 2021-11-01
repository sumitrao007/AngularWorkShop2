import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

MyCourse:string[]=[];

  constructor(private service:CourseService) { 
    // let service =new CourseService();
    // this.MyCourse=service.getCourse();
  }

  ngOnInit() {
     this.MyCourse= this.service.getCourse();
  }


}
