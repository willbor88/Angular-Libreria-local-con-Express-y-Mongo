import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;
  constructor() {

    this.title = 'Wilmar Borja';
    this.subtitle = 'Desarrollador';
    this.email = 'willbor88@hotmail.com';

  }

  ngOnInit() {
  }

}
