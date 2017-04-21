import {Component, Inject, OnInit} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .root-card {
      width: 80%;
      margin: 30px auto;
    }

    @media screen and (max-width: 600px) {
      .root-card {
        width: 100%;
      }
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(WebsocketService) private websocketService
  ) { }

  ngOnInit() {
  }

}
