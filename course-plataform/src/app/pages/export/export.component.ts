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
  certificate_data = {
    name: "",
    course: ""
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  async getUserData() {
    const auth = getAuth();
    const user = auth.currentUser;

    this.userData = user;
    console.log(this.userData);
  }

  generate_certificate() {
    const auth = getAuth();
    const user = auth.currentUser;
    this.certificate_data.name = String(user!.email);

    const link = window.location.href
    const strs = link.split('/');
    console.log(strs)
    const id = strs.at(-1)

    axios.get(this.server + "/" + id, {})
      .then(response => this.certificate_data.course = response.data.title)
  }
}
