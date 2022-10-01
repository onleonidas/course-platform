import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) {

  }

  server = 'http://localhost:3000';
  state = {
    person: ""
  }

  ngOnInit(): void {}

  register() {
    if (this.email == ''){
      alert('Please enter email')
      return;
    }

    if (this.password == ''){
      alert('Please enter password')
      return;
    }

    this.auth.register(this.email, this.password);
    console.log("oxe")
    this.save_config(this.email)
    this.email = '';
    this.password = '';
  }

  async save_config(log: any){
    await axios.post(this.server + '/SaveUserConfig', {
      name: this.email,
      email: this.email,
      notfication_config:"I want to receive promotion notification",
      is_professor: false,
      courses_owned:[{"course_id":"","user_course_progress":0},]//lembrar de substituir.
    })
  }
}
