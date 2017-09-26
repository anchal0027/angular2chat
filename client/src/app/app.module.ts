import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {route} from './app.routes'
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './registration/register.component';
import {usersToChatPageComponent} from './usersToChat/usersToChat.component';
import {startChatComponent} from './startChat/startChat.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    usersToChatPageComponent,
    startChatComponent
 
  ],
  imports: [
   BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
     ReactiveFormsModule,
     HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
