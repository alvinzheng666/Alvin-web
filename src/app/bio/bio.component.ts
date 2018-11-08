import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  myEmail: string = '';
  constructor() {}

  ngOnInit() {
    this.myEmail = '@z@h@e@n@g';
    this.myEmail = this.myEmail.replace(/@/g, '');
    this.myEmail = [this.myEmail, 'temple.edu'].join('@');
  }
}
