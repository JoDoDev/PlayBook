import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from 'app/services/user.service';

@Injectable()
export class IsAuthGuardService  implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {
      if (this.userService.loggdin) {
        resolve(true);
        return;
      }
      this.authenticationService.makeSessionLogin().then(
        (valid) => {
          if (!valid) {
            this.router.navigate(['/login']);
          }
          resolve(valid);
        }
      )
    })
  }
}
