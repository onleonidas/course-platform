import { Component, OnInit , Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



@Injectable()
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) {
  }

  server = 'http://localhost:3000';
  state = {
    person: ""
  }

  ngOnInit(): void {
  }
  
  login() {
    if (this.email == ''){
      alert('Please enter email')
      return;
    }

    if (this.password == ''){
      alert('Please enter password')
      return;
    }
    this.auth.login(this.email, this.password);
    console.log(this.email);
    this.email = '';
    this.password = '';
  }
}



