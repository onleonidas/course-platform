
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
  title: string;
  price: number;
  link: string;
  desc: string;
  img: string;
  constructor() {this.title="";this.price = 0;this.link = "";this.desc = "",this.img = ""}
  ngOnInit(): void {this.title="";}

  async post_courses(){
    await axios.post((this.server + '/Courseupload'),{
      title:this.title,link:this.link,desc:this.desc,img:this.img, price:this.price
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
