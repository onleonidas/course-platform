
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
  nome: string;
  link: string;

  constructor() {this.nome="";this.link = "";}
  ngOnInit(): void {this.nome="";}

  async post_courses(){
    await axios.post((this.server + '/Courseupload'),{
      coursename:this.nome,link:this.link
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
