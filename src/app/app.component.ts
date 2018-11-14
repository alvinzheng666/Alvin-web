import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Zuyin (Alvin) Zheng';
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;
  myEmail = '';

  ngOnInit() {
    this.myEmail = '@z@h@e@n@g';
    this.myEmail = this.myEmail.replace(/@/g, '');
    this.myEmail = [this.myEmail, 'temple.edu'].join('@');
  }
}
