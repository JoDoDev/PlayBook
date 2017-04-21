import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./site/login/login.component";
import {HomeComponent} from "./site/home/home.component";
import {RegisterComponent} from "./site/register/register.component";
import {NotfoundComponent} from './site/notfound/notfound.component';
import {IsAuthGuardService} from './guards/is-auth-guard.service';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent , canActivate: [ IsAuthGuardService ]},
  { path: '404', component: NotfoundComponent },
  {path: '**', redirectTo: '404'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
