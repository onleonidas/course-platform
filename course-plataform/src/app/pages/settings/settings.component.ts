import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  notification_status: "";
  server = 'http://localhost:3000';
  constructor() {this.notification_status = "" }

  ngOnInit(): void {
    this.get_noti_status();
  }
  async get_noti_status(){
    let resp = await axios.post(this.server + '/getNotiConfig', {
      name: "michel"//trocar por nome do usuario
    })
    this.notification_status = resp.data.notfication_config;
  }
  async change_noti(){
    let resp = await axios.post((this.server + '/ChangeNoti'),{
      name: "michel"//trocar por nome do usuario
    })
    this.notification_status = resp.data;
  }
}
