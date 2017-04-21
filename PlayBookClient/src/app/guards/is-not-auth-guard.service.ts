import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from 'app/services/user.service';

@Injectable()
export class IsNotAuthGuardService  implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.userService.loggdin;
  }
}
