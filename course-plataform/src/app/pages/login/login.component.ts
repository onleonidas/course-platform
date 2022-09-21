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
  #response = []
  resp = Array();
  ngOnInit(): void {
    
  }
  constructor(private http : HttpClient) {}
  
  async get_logins(){
    let res = await axios.get(this.server + '/login');
    let data =  JSON.parse(res.data)

    try {
      console.log(data);
    }
    catch(err) {
      console.log("liguagem lixo");
    }
  }
}

