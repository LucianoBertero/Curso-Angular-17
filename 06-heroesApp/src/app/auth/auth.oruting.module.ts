

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';



const routes: Routes = [
  { path: '', component: LayoutPagesComponent,
  children:[
    {path:'login',component:LoginPageComponent},
    {path:'new-account',component:RegisterPageComponent},
    {path:'**',redirectTo:'login'}
  ]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
