import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';
import { json } from 'body-parser';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss']
})
export class MycoursesComponent implements OnInit {

  server = 'http://localhost:3000';
  user_data: any;
  array_cursos: any[]
  nomes: string[];
  links: string[];
  desc: string[];
  imagens: string[];

  constructor(private auth: AuthService) {this.nomes = [];this.links = [];this.desc = [];this.imagens = [];
    this.array_cursos = [];}
  ngOnInit(): void {this.get_courses();}

  async get_courses() {
    const auth = getAuth();
    const user = auth.currentUser;
    this.user_data = user;
    console.log('aaa')
    const data1 = () => {return axios.post(this.server + '/getUserCourses', { email: this.user_data.email })
      .then(response => {    
        return response.data.map((course: { course_id: any; }) => course.course_id);
      })
      .catch(function (error) {
        console.log('Error', error);
      })
      }
      data1().then(data => {
        this.array_cursos = [data];
        console.log(this.array_cursos)
      })
  }
}
