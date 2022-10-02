import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth } from "firebase/auth";
import axios from 'axios';

@Component({
  selector: 'app-nav-bar-on',
  templateUrl: './nav-bar-on.component.html',
  styleUrls: ['./nav-bar-on.component.scss']
})



export class NavBarOnComponent implements OnInit{
  title = 'course-plataform';
  aluno = 'Michel Leonidas';
  server = 'http://localhost:3000';
  is_professor: Boolean;

  constructor(private auth : AuthService)
    { this.is_professor = false }

  ngOnInit(): void {
    this.get_noti_status();
  }

  logout() {
    this.auth.logout();
  }

  async calluser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      await axios.post((this.server + '/Mycourses'),{
        usermail: user.email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  }
  async get_noti_status(){
    const auth = getAuth();
    const user = auth.currentUser;
    const name = user?.email
    let resp = await axios.post(this.server + '/getConfig', {
      name: name//trocar por nome do usuario
    })
    this.is_professor = resp.data.is_professor;
    console.log(this.is_professor)
  }
}
