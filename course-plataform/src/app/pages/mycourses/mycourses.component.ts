import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';
import { json } from 'body-parser';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss']
})
export class MycoursesComponent implements OnInit {

  server = 'http://localhost:3000';
  user_data: any;
  array_cursos: any[];
  nomes: string[];
  links: string[];
  desc: string[];
  imagens: string[];
  trustedUrl: SafeUrl;

  constructor(private param: ActivatedRoute, private auth: AuthService, private sanitizer: DomSanitizer) {this.nomes = [];this.links = [];this.desc = [];this.imagens = [];
    this.array_cursos = [];this.trustedUrl="";}
  ngOnInit(): void {this.get_courses();}

  async get_courses() {
    const auth = getAuth();
    const user = auth.currentUser;
    this.user_data = user;
    
    const data1 = () => {return axios.post(this.server + '/getUserCourses', { email: this.user_data.email })
      .then(response => {    
        return response.data.map((course: { course_id: any; }) => course.course_id);
      })
      .catch(function (error) {
        console.log('Error', error);
      })
      }
      data1().then(data => {
        const courses = data;
        console.log(courses)
        for (var i = 0; i <= courses.length-1; i++){
          if (courses[i] != "" || courses[i] != undefined)
            console.log(courses[i])
            const data2 = () => {return axios.get(this.server + "/"+courses[i], {})
            .then(function (response) {
              return response.data;
            })
            .catch(function (error) {
              console.log(error);
            })
            }
            data2().then(data => {
              if (this.array_cursos.length != courses.length)
                  this.array_cursos.push(data);
                  this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.array_cursos[0][i].link);
                  console.log('array', this.array_cursos)
            })  
        }
        
      })
  }
}
