import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { RegisterPageComponent } from '../auth/pages/register-page/register-page.component';
import { LayoutPagesComponent } from '../auth/pages/layout-pages/layout-pages.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';


@NgModule({
  declarations: [
RegisterPageComponent,
LayoutPagesComponent,
LoginPageComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
