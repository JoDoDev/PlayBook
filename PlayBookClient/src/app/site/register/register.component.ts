import {Component, Inject, OnInit} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    .register{
      width: 30%;
      margin: 160px auto;
    }
    .button-register {
      background-color: #2196F3;
      color: #FFFFFF;
    }
    .register-title {
      font-size: 40px;
    }
    .full-width-input {
      width: 80%;
    }
  `]
})
export class RegisterComponent implements OnInit {

  constructor(@Inject(WebsocketService) private websocketService) { }

  ngOnInit() {
  }

}
