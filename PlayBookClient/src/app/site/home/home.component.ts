import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .root-card {
      width: 70%;
      margin: 30px auto;
    }
    .games {
      background-color: red;
    }
    .a {
      width: 45%;
      float: left;
      margin: 2.5%;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
