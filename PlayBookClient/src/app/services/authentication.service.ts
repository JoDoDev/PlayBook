import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {WebsocketService} from './websocket.service';

@Injectable()
export class AuthenticationService {

  constructor(
    private websocketService: WebsocketService,
    private userService: UserService) {}

  makeSessionLogin(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      var onSessionLogin = (data) => {
        if (data.data.valid) {
          this.websocketService.messageEmitter.removeListener("SESSION_LOGIN", onSessionLogin);
          this.websocketService.messageEmitter.removeListener("SESSION_LOGIN_ERROR", onSessionLoginError);
          this.userService.username = data.data.username;
          this.userService.email = data.data.email;
          this.userService.loggdin = true;
          this.userService.sessionKey = data.data.sessionkey;
          resolve(true);
        } else {
          this.websocketService.messageEmitter.removeListener("SESSION_LOGIN", onSessionLogin);
          this.websocketService.messageEmitter.removeListener("SESSION_LOGIN_ERROR", onSessionLoginError);
          this.userService.loggdin = false;
          resolve(false);
        }
      };
      var onSessionLoginError = (data) => {
        resolve(false);
      };

      this.websocketService.messageEmitter.on("SESSION_LOGIN", onSessionLogin);
      this.websocketService.messageEmitter.on("SESSION_LOGIN_ERROR", onSessionLoginError);
      let sessionKey = this.userService.sessionKey;
      this.websocketService.send({
        type: "SESSION_LOGIN",
        data: {
          sessionkey: sessionKey
        }
      });
    });
  }

}
