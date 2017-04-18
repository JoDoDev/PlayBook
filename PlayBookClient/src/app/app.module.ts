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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    GameComponent
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
    UserService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
