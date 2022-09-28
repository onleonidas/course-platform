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

  async generateCertificate() {
    await axios.post(this.server + "/generateCertificate", {
      name: "Natália",
    })
      .then(response => {
        console.log(response);
      })
  }
}
