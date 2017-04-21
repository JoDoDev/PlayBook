import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { LoginComponent } from './site/login/login.component';
import { RegisterComponent } from './site/register/register.component';
import {routing} from "./app.routing";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModuleModule} from './custom-material-module/custom-material-module.module';
import { NotfoundComponent } from './site/notfound/notfound.component';
import { GameComponent } from './site/home/game.component';
import {WebsocketService} from './services/websocket.service';
import {UserService} from './services/user.service';
import { MultiJComponent } from './components/games/multi-j/multi-j.component';
import {IsAuthGuardService} from './guards/is-auth-guard.service';
import {AuthenticationService} from './services/authentication.service';
import { LayoutComponent } from './components/layout/layout.component';
import {IsNotAuthGuardService} from './guards/is-not-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    GameComponent,
    MultiJComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    ReactiveFormsModule
  ],
  providers: [
    WebsocketService,
    UserService,
    IsAuthGuardService,
    IsNotAuthGuardService,
    AuthenticationService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
