import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public username: string;
  public email: string;
  public loggdin: boolean = false;

  private _sessionKey: string;
  get sessionKey(): string {
    return this._sessionKey;
  }
  set sessionKey(value: string) {
    this._sessionKey = value;
  }


  constructor() { }


}
