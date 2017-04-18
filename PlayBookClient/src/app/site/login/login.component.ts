import {Component, Inject, OnInit} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  `]
})
export class LoginComponent implements OnInit {

  constructor(@Inject(WebsocketService) private websocketService) { }
  //TODO: Validate -> username correct
  //TODO: Write errormessage if input is incorrect

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }

}
