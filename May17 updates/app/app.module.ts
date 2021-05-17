import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { EventComponent } from './event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CalcComponent } from './calc/calc.component';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { StudentShowComponent } from './student-show/student-show.component';
import { EmploydropdownComponent } from './employdropdown/employdropdown.component';
import { StudentdropdownComponent } from './studentdropdown/studentdropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'first',component:FirstComponent,outlet:'data'},
  {path:'second',component:SecondComponent,outlet:'data'},
  {path:'third',component:ThirdComponent,outlet:'data'},
  {path:'event',component:EventComponent,outlet:'data'},
  {path:'calc',component:CalcComponent,outlet:'data'},
  {path:'employ',component:EmployShowComponent,outlet:'data'},
  {path:'student',component:StudentShowComponent,outlet:'data'},
  {path:'employdrop',component:EmploydropdownComponent,outlet:'data'},
  {path:'studentdrop',component:StudentdropdownComponent,outlet:'data'},
  ]
}
]



// const appRoutes : Routes = [
//   {path:'first',component:FirstComponent},
//   {path:'second',component:SecondComponent},
//   {path:'third',component:ThirdComponent},
//   {path:'event',component:EventComponent},
//   {path:'calc',component:CalcComponent},
//   {path:'employ',component:EmployShowComponent},
//   {path:'student',component:StudentShowComponent},
//   {path:'employdrop',component:EmploydropdownComponent},
//   {path:'studentdrop',component:StudentdropdownComponent},
//   {path:'',component:MenuComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    DataBindComponent,
    EventComponent,
    TwoWayComponent,
    CalcComponent,
    EmployShowComponent,
    StudentShowComponent,
    EmploydropdownComponent,
    StudentdropdownComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
