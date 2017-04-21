import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class IsAuthGuardService  implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {
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
