import { Component } from '@angular/core';
import { GifsService } from '../../gifts/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  get tagsHistori(){
    return this.gifsService.tagsHistory
  }

  reloadGif(nombre:string):void{
    this.gifsService.searchTag(nombre)
  }
}
