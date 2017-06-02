import { Injectable } from '@angular/core';
import {getCookie, setCookie} from '../util/cookie';

@Injectable()
export class UserService {
  public username: string;
  public email: string;
  public loggdin: boolean = false;
  public loaded: boolean = false;

  private _sessionKey: string;
  get sessionKey(): string {
    this._sessionKey = getCookie("sessionkey");
    return this._sessionKey;
  }
  set sessionKey(value: string) {
    setCookie("sessionkey", value, 3);
    this._sessionKey = value;
  }

  constructor() {
    this._sessionKey = getCookie("sessionkey");
  }


}
