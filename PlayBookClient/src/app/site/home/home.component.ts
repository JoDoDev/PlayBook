import {Component, Inject, OnInit} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .root-card {
      width: 70%;
      margin: 30px auto;
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
