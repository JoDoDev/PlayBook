import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styles: [`
    .notfound{
      width: 30%;
      margin: 160px auto;
    }
    .button-back {
      background-color: #2196F3;
      color: #FFFFFF;
    }
    .content {
      margin: 20px 0;
    }
  `]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
