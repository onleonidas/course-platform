import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-buycourse',
  templateUrl: './buycourse.component.html',
  styleUrls: ['./buycourse.component.scss']
})
export class BuycourseComponent implements OnInit {
  safeURL: any;
  videoURL: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer){this.safeURL= "";this.videoURL = ""}

  ngOnInit() {
    let id = 'https://www.youtube.com/watch?v=m9QU69958JU&list=RDMMm9QU69958JU&start_radio=1&ab_channel=YudongWang';
    let url = `https://www.youtube.com/embed/${id}`;
    this.videoURL = this._sanitizer.bypassSecurityTrustResourceUrl(id);
}

}
