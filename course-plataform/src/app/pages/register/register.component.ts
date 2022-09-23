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
    this.email = '';
    this.password = '';
  }
}
