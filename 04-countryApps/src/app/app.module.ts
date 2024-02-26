import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutinModule } from './app-routing.module.ts.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    SharedModule,
    AppRoutinModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
