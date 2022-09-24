import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  server = 'http://localhost:3000';
  is_pop: Boolean;
  pop_name: string;

  constructor() {this.is_pop = true;this.pop_name = "";}

  ngOnInit(): void {this.runnig_pop();}

  async runnig_pop(){
    await setTimeout(() => {
      this.get_pop_up();
      this.runnig_pop();
    }, 20000);
  }  
  async get_pop_up(){
    const data1 = () => {return axios.get(this.server + '/Popup', {})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })}
    data1().then(data => {
      if(this.is_pop == true){
        console.log("mostre uma prom");
        try{
          console.log(data);
          this.pop_name = data.noti;
          var elemento = document.getElementById("openModalButton");
          elemento?.click();
        }catch (error) {
          console.log(error)
        }
      }
    })
  }

  async make_pop_true() {
    this.is_pop = true;
  }
  async make_pop_false(){
    this.is_pop = false;
  }
}
