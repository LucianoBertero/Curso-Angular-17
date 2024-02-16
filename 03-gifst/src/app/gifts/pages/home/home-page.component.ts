import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifts.interface';

@Component({
  selector: 'gif-home-page',
  templateUrl: './home-page.component.html',

})
export class HomePageComponent {

  constructor(private gifsService:GifsService){

  }
  get gifs():Gif[]{

    return this.gifsService.gifsList

  }

}
