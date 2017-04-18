import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public username: string;
  public email: string;
  public loggdin: boolean = false;

  constructor() { }
}
