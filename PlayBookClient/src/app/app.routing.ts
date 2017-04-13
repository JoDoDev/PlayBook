import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./site/login/login.component";
import {HomeComponent} from "./site/home/home.component";
import {RegisterComponent} from "./site/register/register.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
