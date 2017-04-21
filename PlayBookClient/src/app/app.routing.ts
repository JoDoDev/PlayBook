import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./site/login/login.component";
import {HomeComponent} from "./site/home/home.component";
import {RegisterComponent} from "./site/register/register.component";
import {NotfoundComponent} from './site/notfound/notfound.component';
import {IsAuthGuardService} from './guards/is-auth-guard.service';
import {LayoutComponent} from './components/layout/layout.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, canActivate: [ IsAuthGuardService ], children: [
    { path: 'home', component: HomeComponent},
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotfoundComponent },
  {path: '**', redirectTo: '404'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
