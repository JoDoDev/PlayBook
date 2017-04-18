import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private _sessionKey: string;

  constructor() { }

  get sessionKey(): string {
    return this._sessionKey;
  }

  set sessionKey(value: string) {
    this._sessionKey = value;
  }

}
