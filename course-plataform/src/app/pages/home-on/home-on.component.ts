import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { AuthService } from 'src/app/services/auth.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-home-on',
  templateUrl: './home-on.component.html',
  styleUrls: ['./home-on.component.scss']
})
export class HomeOnComponent implements OnInit {
  server = 'http://localhost:3000';
  is_pop: Boolean;
  pop_name: string;

  constructor() {this.is_pop = true;this.pop_name = "";}

  ngOnInit(): void {this.runnig_pop();}

  async runnig_pop(){
    await setTimeout(() => {
      this.get_pop_up();
      this.runnig_pop();
      console.log("to entendendo he nada")
    }, 20000);
  }  
  async get_pop_up(){
    let resp = await axios.get(this.server + '/Popup', {})
    if(resp.data.noti != 'no notification'){
      console.log("mostre uma prom");
      try{
        this.pop_name = resp.data.noti ;
        var elemento = document.getElementById("openModalButton");
        elemento?.click();
      }catch (error) {
        console.log(error)
      }
    }
  }

}
