import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  notification_status: "";
  server = 'http://localhost:3000';
  userData: any
  constructor() {this.notification_status = "", this.userData}
  
  ngOnInit(): void {
    this.get_noti_status();
  }
  async get_noti_status(){
    const auth = getAuth();
    const user = auth.currentUser;
    let resp = await axios.post(this.server + '/getConfig', {
      name: user?.email//trocar por nome do usuario
    })
    this.notification_status = resp.data.notfication_config;
  }
  async change_noti(){
    const auth = getAuth();
    const user = auth.currentUser;
    let resp = await axios.post((this.server + '/ChangeNoti'),{
      name: user?.email//trocar por nome do usuario
    })
    this.notification_status = resp.data;
  }
}
