import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .login{
      width: 30%;
      margin: 160px auto;
      padding: 24px 24px 0 24px;
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
    .error-text {
      color: crimson;
      font-size: small;
    }
  `]
})
export class LoginComponent implements OnInit {
  private loginListener;
  private loginErrorListener;
  showErrorText: boolean = false;

  //TODO: Validate -> username correct
  //TODO: Write errormessage if input is incorrect

  loginForm: FormGroup;

  constructor(
    @Inject(WebsocketService) private websocketService,
    @Inject(UserService) private userService
  ) { }

  ngOnInit() {
    this.loginListener = this.websocketService.messageEmitter.on("LOGIN", (data) => { this.onLogin(data) });
    this.loginErrorListener = this.websocketService.messageEmitter.on("LOGIN_ERROR", (data) => { this.onLoginError(data) });

    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmit(empForm: any) {
    let sendObject = {
      type: 'LOGIN',
      data: this.loginForm.value
    };
    console.log("sdf");
    this.websocketService.send(sendObject);
  }

  private onLogin(data) {
    if (!data.data.valid) {
      this.showErrorText = true;
      return;
    }
    this.showErrorText = false;
    this.userService.username = data.data.username;
    this.userService.email = data.data.email;
  }

  private onLoginError(data) {

  }

}
