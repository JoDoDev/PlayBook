import {Component, Inject, OnInit} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .login{
      width: 30%;
      margin: 160px auto;
    }
    .button-login {
      background-color: #2196F3;
      color: #FFFFFF;
    }
    .login-title {
      font-size: 40px;
    }
    .full-width-input {
      width: 80%;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(@Inject(WebsocketService) private websocketService) { }

  ngOnInit() {
  }

}
