import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email, password).then ( () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/Homeon']);
    }, err => {
        alert('You are not registered or there is something wrong with your credentials.');
        this.router.navigate(['/login']);
    })
  }

  //register method
  register(email : string, password :  string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then ( () => {
      alert('Registration Successful');
      this.router.navigate(['./login']);
    }, err=> {
      alert(err.message);
      this.router.navigate(['./register'])
    })
  }

  //logout
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/homeon']);
    }, err=> {
      alert(err.message);
    })
  }
}
