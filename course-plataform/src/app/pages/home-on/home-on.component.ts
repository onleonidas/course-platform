import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-on',
  templateUrl: './home-on.component.html',
  styleUrls: ['./home-on.component.scss']
})
export class HomeOnComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

}
