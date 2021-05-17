import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { EmployComponent } from './employ/employ.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { EmployReactiveComponent } from './employ-reactive/employ-reactive.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';



const appRoutes : Routes=[
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
  {path:'login',component:LoginComponent,outlet:'data'},
   {path:'employ',component:EmployComponent,outlet:'data'},
   {path:'login-reactive',component:LoginReactiveComponent,outlet:'data'},
   {path:'employ-reactive',component:EmployReactiveComponent,outlet:'data'},
  ]
}
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployComponent,
    LoginReactiveComponent,
    EmployReactiveComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
