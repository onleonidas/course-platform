import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { getAuth, onAuthStateChanged } from "firebase/auth";



@Component({
  selector: 'app-buycourse',
  templateUrl: './buycourse.component.html',
  styleUrls: ['./buycourse.component.scss']
})

export class BuycourseComponent implements OnInit {
  userData:any = undefined;
  certificate_allowed:boolean = true;
  server = 'http://localhost:3000';
  array_cursos: any[]
  trustedUrl: SafeUrl;
  
  constructor(private param: ActivatedRoute, private auth: AuthService,private sanitizer: DomSanitizer) {
    this.array_cursos = [];
    this.trustedUrl="";
  }
  
  ngOnInit(): void {this.get_courses();}

  async get_courses(){
    const link = window.location.href
    const strs = link.split('/');
    console.log(strs)
    const id = strs.at(-1)

    const data1 = () => {return axios.get(this.server + "/"+id, {})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    }
    data1().then(data => {
      this.array_cursos = [data];
      this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.array_cursos[0].link);
      console.log(this.array_cursos)
    })    
  }
  
  cleanURL(oldURL: string ): SafeUrl {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    }


  buy_courses(){
    const link = window.location.href
    const strs = link.split('/');
    console.log(strs)
    const id = strs.at(-1)

    const auth = getAuth();
    const user = auth.currentUser;
    this.userData = user?.email;
    console.log(this.userData, id)

    let resp = axios.post(this.server + '/AddCourse', {
      email: this.userData, course_id: id
    })
  }

  async handle_course_completion() {
    let is_complete = false;
    const auth = getAuth();
    const user = auth.currentUser;
    this.userData = user?.email;

    const link = window.location.href
    const strs = link.split('/');
    const id = strs.at(-1)

    const checkbox = document.getElementById('course_completed') as HTMLInputElement | null;
    checkbox?.checked ? is_complete = true : is_complete = false;

    await axios.post(this.server + '/updateCouseProgress', {
      email: user?.email,
      course_id: id,
      progress_update: is_complete ? 1 : -1
    })
      .then(() => is_complete ? this.certificate_allowed = false : this.certificate_allowed = true)
  }
}

