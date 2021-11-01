import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student/student.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirevtiveComponent } from './switchdirevtive/switchdirevtive.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { PostComponent } from './post/post.component';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirevtiveComponent,
    CourseComponent,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    MyfollowerComponent,
    QueryparamComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
