import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing-module";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "./components/services/authentication.service";
import {HttpClientModule} from "@angular/common/http";
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { FriendComponent } from './components/friend/friend.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FriendlistComponent,
    CanvasComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
