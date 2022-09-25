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

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
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
}
