import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { json } from 'body-parser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-courses-on',
  templateUrl: './courses-on.component.html',
  styleUrls: ['./courses-on.component.scss']
})
export class CoursesOnComponent implements OnInit {
  server = 'http://localhost:3000';
  array_cursos: any[]
  nomes: string[];
  links: string[];
  desc: string[];
  imagens: string[];
  constructor(private param: ActivatedRoute) {this.nomes = [];this.links = [];this.desc = [];this.imagens = [];
    this.array_cursos = [];}
  ngOnInit(): void {this.get_courses();}

  async get_courses(){
    const data1 = () => {return axios.get(this.server + '/Courseon', {})
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
