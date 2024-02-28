import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
{path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
,{path:'hero',loadChildren:()=>import('./hero/hero.module').then(m=>m.HeroModule)}
,{path:'404',component:Error404PageComponent}
,{path:'',redirectTo:'heros',pathMatch:'full'}
,{path:'**',redirectTo:'404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
