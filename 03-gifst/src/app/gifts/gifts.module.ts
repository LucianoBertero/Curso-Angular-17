import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomePageComponent,
    ShearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
    LazyImageComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [HomePageComponent,ShearchBoxComponent,CardListComponent,LazyImageComponent]
})
export class GiftsModule { }
