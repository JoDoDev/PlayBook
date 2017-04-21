import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./site/login/login.component";
import {HomeComponent} from "./site/home/home.component";
import {RegisterComponent} from "./site/register/register.component";
import {NotfoundComponent} from './site/notfound/notfound.component';
import {IsAuthGuardService} from './guards/is-auth-guard.service';
import {LayoutComponent} from './components/layout/layout.component';
import {MultiJComponent} from './components/games/multi-j/multi-j.component';
import {IsNotAuthGuardService} from './guards/is-not-auth-guard.service';
import {MultiJGameComponent} from './components/games/multi-j/multi-jgame.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, canActivate: [ IsAuthGuardService ], children: [
    { path: 'home', component: HomeComponent},
    { path: 'game', redirectTo: 'home', pathMatch: 'full' },
    { path: 'game', children: [
      { path: 'multiJ', component: MultiJComponent},
      { path: 'multiJ/:topic', component: MultiJGameComponent},
    ]},
  ]},
  { path: 'login', component: LoginComponent, canActivate: [ IsNotAuthGuardService ] },
  { path: 'register', component: RegisterComponent, canActivate: [ IsNotAuthGuardService ] },
  { path: '404', component: NotfoundComponent },
  {path: '**', redirectTo: '404'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
