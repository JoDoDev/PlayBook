import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {

    if (!this.userService.loggdin) {
      this.authenticationService.makeSessionLogin().then(
        (valid) => {
          this.userService.loaded = true;
          if (valid) {
            if (this.router.isActive('/login', true) || this.router.isActive('/register', true)) {
              this.router.navigate(['/home']);
            }
          } else {
            if (!this.router.isActive('/login', true) || !this.router.isActive('/register', true)) {
              this.router.navigate(['/login']);
            }
          }
        }
      );
      return;
    }
  }
}
