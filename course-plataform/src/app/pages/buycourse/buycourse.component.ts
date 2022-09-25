import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { json } from 'body-parser';
import axios from 'axios';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-buycourse',
  templateUrl: './buycourse.component.html',
  styleUrls: ['./buycourse.component.scss']
})
export class BuycourseComponent implements OnInit {
  server = 'http://localhost:3000';

  constructor(private param:ActivatedRoute) { }
  getNameCourse:any;
  courseData:any;

  ngOnInit(): void {
    this.getNameCourse = this.param.snapshot.paramMap.get('name');
  }

  async CourseInfo(){

    await axios.post((this.server + '/Buycourses'),{
      coursename: (this.param.snapshot.paramMap.get('name'))
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
}
