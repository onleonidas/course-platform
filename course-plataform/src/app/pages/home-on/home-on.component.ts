import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { AuthService } from 'src/app/services/auth.service';
import { count } from 'rxjs';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-home-on',
  templateUrl: './home-on.component.html',
  styleUrls: ['./home-on.component.scss']
})
export class HomeOnComponent implements OnInit {
  server = 'http://localhost:3000';
  is_pop: Boolean;
  pop_name: string;
  link: string;

  is_runnig: boolean;
  constructor() {this.is_runnig=true;this.is_pop = true;this.pop_name = "";this.link = ""}

  ngOnInit(): void {this.runnig_pop();}

  async runnig_pop(){
    await setTimeout(() => {
      if(this.is_runnig){
        this.get_pop_up();
        this.runnig_pop();      }
    }, 10000);
  }  
  async get_pop_up(){
    const auth = getAuth();
    const user = auth.currentUser;
    let resp = await axios.post(this.server + '/Popup', {
      name: user?.email//lembrar de substituir
    })
    if(resp.data != "no notification"){
      console.log("mostre uma prom");
      console.log(JSON.stringify(resp.data))
      try{
        this.pop_name ="are you interested in " + resp.data.title + " ?";
        this.link = resp.data.id;
        var elemento = document.getElementById("openModalButton");
        elemento?.click();
      }catch (error) {
        console.log(error)
      }
    }else{
      console.log("you are set to not receive notifications")
    }
  }
  ngOnDestroy(){this.is_runnig=false;console.log("destroying home on");}
}
