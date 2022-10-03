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
  is_professor : boolean = false;
  
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

    const checkbox = document.getElementById(
      'subscribe',
    ) as HTMLInputElement | null;
  
    if (checkbox?.checked) {
      this.is_professor = true
    } else {
      this.is_professor = false
    }
    
    console.log(this.is_professor); 
    this.save_config(this.email, this.is_professor)
    this.email = '';
    this.password = '';
  }

  async save_config(em: any, prof: any){
    await axios.post(this.server + '/SaveUserConfig', {
      //name: this.email,
      email: this.email,
      notfication_config:"I want to receive promotion notification",
      is_professor: this.is_professor,
      courses_owned:[]
    })
  }
}
