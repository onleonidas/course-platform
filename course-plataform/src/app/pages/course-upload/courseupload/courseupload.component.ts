
import { Component, OnInit , Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';


@Component({
  selector: 'app-courseupload',
  templateUrl: './courseupload.component.html',
  styleUrls: ['./courseupload.component.scss']
})
export class CourseuploadComponent implements OnInit {
  server = 'http://localhost:3000';
  constructor() { }

  
  ngOnInit(): void {
  }

  async post_courses(){
    await axios.post((this.server + '/Courseupload'),{
      coursename:'docker',link:'link_do_video'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
