import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  userData:any = undefined;
  server = 'http://localhost:3000';
  array_cursos: any[];
  trustedUrl: SafeUrl;

  constructor(private param: ActivatedRoute, private auth: AuthService,private sanitizer: DomSanitizer) {
    this.array_cursos = [];this.trustedUrl="";}
  ngOnInit(): void {}

  cleanURL(oldURL: string ): SafeUrl {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    }

  buy_courses(){
    const link = window.location.href
    const strs = link.split('/');
    console.log(strs)
    const id = strs.at(-1)

    const auth = getAuth();
    const user = auth.currentUser;
    this.userData = user?.email;
    console.log(this.userData, id)

    let resp = axios.post(this.server + '/AddCourse', {
      email: this.userData, course_id: id
    })
  }
}
