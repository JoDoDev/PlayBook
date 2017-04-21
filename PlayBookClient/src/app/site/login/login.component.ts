import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';

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
export class LoginComponent implements OnInit , OnDestroy{
  private loginListener;
  private loginErrorListener;
  showErrorText: boolean = false;

  loginForm: FormGroup;

  constructor(
    @Inject(WebsocketService) private websocketService,
    @Inject(UserService) private userService,
    private router: Router,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.loginListener = (data) => { this.onLogin(data) };
    this.loginErrorListener = (data) => { this.onLoginError(data) };
    this.websocketService.messageEmitter.on("LOGIN", this.loginListener);
    this.websocketService.messageEmitter.on("LOGIN_ERROR", this.loginErrorListener);

    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.userService.loggdin === true) {
      this.navigateToHome();
      return;
    }
    let sendObject = {
      type: 'LOGIN',
      data: this.loginForm.value
    };
    this.websocketService.send(sendObject);
  }

  private onLogin(data) {
    if (!data.data.valid) {
      this.showErrorText = true;
      return;
    }
    this.userService.username = data.data.username;
    this.userService.email = data.data.email;
    this.userService.sessionKey = data.data.sessionkey;
    this.userService.loggdin = true;
    this.userService.loaded = true;
    this.navigateToHome()
  }

  private onLoginError(data) {
    let config = new MdSnackBarConfig();
    config.duration = 500000;
    config.extraClasses = ["errorSnackBar"];
    this.snackBar.open(data.cause, "", config);
    console.error("onLoginError", data);
  }

  private navigateToHome() {
    //noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.websocketService.messageEmitter.removeListener("LOGIN", this.loginListener);
    this.websocketService.messageEmitter.removeListener("LOGIN_ERROR", this.loginErrorListener);
  }
}
