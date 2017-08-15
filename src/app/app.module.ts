import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule, appRouterComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserPromiseService } from './services'

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
    UserPromiseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
