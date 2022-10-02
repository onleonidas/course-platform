import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})

export class ExportComponent implements OnInit {
  server = 'http://localhost:3000';
  userData:any = undefined;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  async getUserData() {
    const auth = getAuth();
    const user = auth.currentUser;

    this.userData = user;
    console.log(this.userData);
  }

  async generateCertificate() {
    const auth = getAuth();
    const user = auth.currentUser;

    await axios.post(this.server + "/generateCertificate", { user })
      .then(response => {
        console.log(response);
      })
  }
}
