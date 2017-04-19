import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {modelGroupProvider} from '@angular/forms/src/directives/ng_model_group';

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
  private isUsernameTaken: boolean = false;
  private isEmailTaken: boolean = false;
  private isUsernameTakenSubscription;
  private isEmailTakenSubscription;
  private registerSubscription;
  private registerSubscriptionErr;
  private registerFormSubscription: Subscription;
  registerForm: FormGroup;

  constructor(
    @Inject(WebsocketService) private websocketService,
    @Inject(UserService) private userService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();

    this.isEmailTakenSubscription = (data) => {
      if (this.isEmailTaken !== data.data.exists ) {
        this.isEmailTaken = data.data.exists;
        this.registerForm.controls.email.updateValueAndValidity();
      }
    };
    this.isUsernameTakenSubscription = (data) => {
      if (this.isUsernameTaken !== data.data.exists ) {
        this.isUsernameTaken = data.data.exists;
        this.registerForm.controls.username.updateValueAndValidity();
      }
    };

    this.registerSubscription = (data) => {
      this.userService.username = data.data.username;
      this.userService.email = data.data.email;
      this.userService.sessionKey = data.data.sessionkey;
      this.userService.loggdin = true;
    };
    this.registerSubscriptionErr = (data) => {
      console.error(data);
    };

    this.websocketService.messageEmitter.on("DOES_EMAIL_EXIST", this.isEmailTakenSubscription);
    this.websocketService.messageEmitter.on("DOES_USERNAME_EXIST", this.isUsernameTakenSubscription);
    this.websocketService.messageEmitter.on("REGISTER", this.registerSubscription);
    this.websocketService.messageEmitter.on("REGISTER_ERROR", this.registerSubscriptionErr);
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      'username': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100),this.isUsernameTakenValidator()]],
      'email': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100), Validators.email, this.isEmailTakenValidator()]],
      'password': ['', Validators.required]
    });


    this.registerFormSubscription = this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    let sendObject = {
      type: 'REGISTER',
      data: this.registerForm.value
    };
    this.websocketService.send(sendObject);
  }

  onValueChanged(data?: any) {
    if (typeof data === 'object') {
      let sendObject;
      sendObject = {
        type: 'DOES_USERNAME_EXIST',
        data: {
          username: data.username
        }
      };
      this.websocketService.send(sendObject);

      sendObject = {
        type: 'DOES_EMAIL_EXIST',
        data: {
          email: data.email
        }
      };
      this.websocketService.send(sendObject);
    }

    if (!this.registerForm) { return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'username': '',
    'email': '',
    'password': ''
  };

  isUsernameTakenValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const username = control.value;
      return this.isUsernameTaken  ? {'isUsernameTaken': { username }} : null;
    };
  }

  isEmailTakenValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const Email = control.value;
      return this.isEmailTaken ? {'isEmailTaken': { Email }} : null;
    };
  }

  validationMessages = {
    'username': {
      'required':      'Username is required.',
      'minlength':     'Username must be at least 4 characters long.',
      'maxlength':     'Username cannot be more than 24 characters long.',
      'isUsernameTaken':  'Username is already taken'
    },
    'email': {
      'minlength':     'Email must be at least 4 characters long.',
      'maxlength':     'Email cannot be more than 24 characters long.',
      'required':      'Email is required.',
      'isEmailTaken':  'Email is already taken. ',
      'email':         'Email is not a valid email. '
    },
    'password': {
      'minlength':     'Password must be at least 4 characters long.',
      'maxlength':     'Password cannot be more than 24 characters long.',
      'required':      'Password is required.'
    }
  };
}

