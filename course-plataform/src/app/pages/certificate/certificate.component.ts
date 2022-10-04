import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  @Input() props!: {
    name: string | null;
    course: string | null;
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
