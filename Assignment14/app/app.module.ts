import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { DataServiceService } from './data-service.service';

const appRoutes: Routes = [
  //{ path: '',   component:AppComponent } ,
  { path: 'users', loadChildren: './users/users.module#UsersModule'}  
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }