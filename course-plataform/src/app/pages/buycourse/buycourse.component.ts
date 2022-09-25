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
  array_cursos: any[]
  nomes: string[];
  links: string[];
  desc: string[];
  imagens: string[];
  constructor(private param: ActivatedRoute) {this.nomes = [];this.links = [];this.desc = [];this.imagens = [];
    this.array_cursos = [];}
  ngOnInit(): void {this.get_courses();}
    
  public open(name: String) {
    alert('Open ' + name);
  }

  async CourseInfo(){
    console.log(this.param.snapshot.paramMap.get('name'))
    await axios.post((this.server + '/Buycourses'),{
      coursename: (this.param.snapshot.paramMap.get('name')),
      
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
  public pickid(id: String){
    console.log(id)
    return id;
  }


  async get_courses(){
    const data1 = () => {return axios.put(this.server + '/Buycourse/{{}}', {})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    }
    data1().then(data => {
      this.array_cursos = data;
    })
  }
  
}
