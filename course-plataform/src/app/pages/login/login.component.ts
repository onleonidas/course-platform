import { Component, OnInit , Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable()
export class LoginComponent implements OnInit {
  server = 'http://localhost:3000';
  state = {
    person: ""
  }

  ngOnInit(): void {}
  constructor(private http : HttpClient) {}
  
  async get_logins(){
    //let res = await axios.get(this.server + '/login');
    //let data =  res.data
    axios.get(this.server + '/login').then((res) => {
      const persons = res.data;
      console.log(persons)
    })
  }
}

