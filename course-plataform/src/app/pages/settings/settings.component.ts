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
    const data1 = () => {return axios.get(this.server + '/getNoti', {})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })}
    data1().then(data => {
      this.notification_status = data;
    })
  }
  async change_noti(){
    await axios.post((this.server + '/ChangeNoti'),{
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.get_noti_status();
  }
}
