import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    .register{
      width: 30%;
      margin: 160px auto;
      padding: 24px 24px 0 24px;
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
    form {
      margin: 0;
      padding: 0;
    }
  `]
})
export class RegisterComponent implements OnInit {

  //TODO: AsyncValidate -> username/email already used
  //TODO: Write errormessage if input is incorrect

  registerForm: FormGroup;

  constructor(@Inject(WebsocketService) private websocketService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern('(.+)@(.+){2,}\.(.+){2,}')]),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}
