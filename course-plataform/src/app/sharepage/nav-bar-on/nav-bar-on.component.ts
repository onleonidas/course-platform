import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar-on',
  templateUrl: './nav-bar-on.component.html',
  styleUrls: ['./nav-bar-on.component.scss']
})

export class NavBarOnComponent implements OnInit{
  title = 'course-plataform';
  aluno = 'Michel Leonidas';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }
}
