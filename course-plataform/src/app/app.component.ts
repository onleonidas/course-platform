import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable }    from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  title = 'course-plataform';
  aluno = 'Michel';
  login = 'http://localhost:4200';
  resultado = '0';
  //readonly 'apiURL' : string;
  constructor(private http : HttpClient) {}

  chamar_login() {
    this.http.get('http://localhost:3000/hmm')
             .subscribe((resultado) => console.log(resultado));
    this.resultado = '1';
  }
}
