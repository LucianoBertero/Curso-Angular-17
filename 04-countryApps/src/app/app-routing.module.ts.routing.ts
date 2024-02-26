import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutComponent } from './shared/pages/about/about.component';
import { ContactComponent } from './shared/pages/contact/contact.component';



const routes: Routes = [
  // { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'countries', loadChildren:()=>import('./countries/countries.module').then(m=>m.CountriesModule) },
  { path: '**', redirectTo: 'countries' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutinModule {}
