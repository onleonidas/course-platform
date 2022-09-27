import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  server = 'http://localhost:3000';

  constructor() { }

  ngOnInit(): void {
  }

  async requestCertificate() {

    await axios.post((this.server + '/Getcertificate'), {
      name: "Natália",
      // coursename: (this.param.snapshot.paramMap.get('name'))
    })
      .then(function (response) {
        console.log(response);
      })
      // .catch(function (error) {
      //   console.log(error);
      // });

  }
}
